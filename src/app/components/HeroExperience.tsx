import { useEffect, useRef, useState } from "react";

type HeroExperienceProps = {
  palette?: [string, string, string];
  labels?: string[];
  mode?: "studio" | "commerce" | "business" | "brand" | "product";
  className?: string;
};

const modeGeometry = {
  studio: [1.9, 1.05, 0.08],
  commerce: [1.35, 1.35, 0.08],
  business: [1.75, 0.92, 0.08],
  brand: [1.2, 1.6, 0.08],
  product: [1.55, 1.05, 0.08],
} as const;

export function HeroExperience({
  palette = ["#22d3ee", "#f59e0b", "#10b981"],
  labels = ["Signal", "Trust", "Launch"],
  mode = "studio",
  className = "",
}: HeroExperienceProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const paletteKey = palette.join("|");
  const [canRender3d, setCanRender3d] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timeout = 0;
    let idleId: number | undefined;

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => setCanRender3d(true), { timeout: 900 });
    } else {
      timeout = window.setTimeout(() => setCanRender3d(true), 450);
    }

    return () => {
      window.clearTimeout(timeout);
      if (idleId) window.cancelIdleCallback(idleId);
    };
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !canRender3d) return;

    let disposed = false;
    let cleanup = () => {};

    void import("three").then((THREE) => {
      if (disposed || !mount.isConnected) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.3, 5.9);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    const panelGroup = new THREE.Group();
    const orbitGroup = new THREE.Group();
    scene.add(group, panelGroup, orbitGroup);

    const [primary, secondary, tertiary] = palette.map((color) => new THREE.Color(color));
    const geometrySize = modeGeometry[mode];

    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    const key = new THREE.PointLight(primary, 3.2, 12);
    key.position.set(-3, 4, 5);
    const rim = new THREE.PointLight(secondary, 2.4, 10);
    rim.position.set(4, -1, 4);
    scene.add(ambient, key, rim);

    const panelMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x101827,
      metalness: 0.45,
      roughness: 0.18,
      transmission: 0.08,
      thickness: 0.25,
      clearcoat: 0.6,
      emissive: primary,
      emissiveIntensity: 0.22,
    });

    const edgeMaterials = [
      new THREE.MeshBasicMaterial({ color: primary, transparent: true, opacity: 1 }),
      new THREE.MeshBasicMaterial({ color: secondary, transparent: true, opacity: 0.92 }),
      new THREE.MeshBasicMaterial({ color: tertiary, transparent: true, opacity: 0.88 }),
    ];

    for (let i = 0; i < 5; i += 1) {
      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(geometrySize[0], geometrySize[1], geometrySize[2]),
        panelMaterial.clone(),
      );
      panel.position.set((i - 2) * 0.86, Math.sin(i) * 0.28, -Math.abs(i - 2) * 0.28);
      panel.rotation.set(-0.25 + i * 0.06, -0.46 + i * 0.23, 0.08 - i * 0.035);
      panel.userData = { phase: i * 0.7, baseY: panel.position.y };
      panelGroup.add(panel);

      const outline = new THREE.LineSegments(
        new THREE.EdgesGeometry(panel.geometry),
        edgeMaterials[i % edgeMaterials.length],
      );
      outline.position.copy(panel.position);
      outline.rotation.copy(panel.rotation);
      outline.userData = { phase: panel.userData.phase, baseY: outline.position.y };
      panelGroup.add(outline);
    }

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: secondary,
      transparent: true,
      opacity: 0.36,
      side: THREE.DoubleSide,
    });

    for (let i = 0; i < 3; i += 1) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.15 + i * 0.55, 0.008, 16, 96),
        ringMaterial.clone(),
      );
      ring.rotation.set(Math.PI / 2.4, i * 0.7, i * 0.5);
      ring.userData.speed = 0.0025 + i * 0.001;
      orbitGroup.add(ring);
    }

    const nodeGeometry = new THREE.SphereGeometry(0.075, 22, 22);
    const nodes: Array<import("three").Mesh> = [];
    for (let i = 0; i < 18; i += 1) {
      const material = new THREE.MeshStandardMaterial({
        color: [primary, secondary, tertiary][i % 3],
        emissive: [primary, secondary, tertiary][i % 3],
        emissiveIntensity: 0.45,
        roughness: 0.4,
      });
      const node = new THREE.Mesh(nodeGeometry, material);
      const angle = (i / 18) * Math.PI * 2;
      const radius = 1.8 + (i % 4) * 0.28;
      node.position.set(Math.cos(angle) * radius, Math.sin(i * 1.7) * 0.72, Math.sin(angle) * radius);
      node.userData = { angle, radius, speed: 0.003 + (i % 5) * 0.0007 };
      nodes.push(node);
      group.add(node);
    }

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 520;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = -Math.random() * 9;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.018,
        transparent: true,
        opacity: 0.58,
      }),
    );
    scene.add(stars);

    const resize = () => {
      const width = mount.clientWidth || 1;
      const height = mount.clientHeight || 1;
      renderer.setSize(width, height, true);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const compact = width < 760;
      panelGroup.position.set(compact ? 0 : 1.65, compact ? -0.62 : 0.02, 0);
      panelGroup.scale.setScalar(compact ? 0.95 : 1.18);
      group.position.set(compact ? 0 : 1.5, compact ? -0.62 : 0.02, 0);
      orbitGroup.position.copy(panelGroup.position);
      orbitGroup.scale.copy(panelGroup.scale);
    };

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.35;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.25;
    };

    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;
      group.rotation.y = t * 0.12 + pointerX;
      group.rotation.x = pointerY;
      panelGroup.rotation.y = Math.sin(t * 0.45) * 0.08 + pointerX * 0.4;
      panelGroup.rotation.x = Math.sin(t * 0.35) * 0.04 + pointerY * 0.35;
      orbitGroup.rotation.z += 0.0012;
      stars.rotation.y = t * 0.012;

      panelGroup.children.forEach((child) => {
        child.position.y = child.userData.baseY + Math.sin(t * 1.4 + child.userData.phase) * 0.08;
      });

      orbitGroup.children.forEach((child) => {
        child.rotation.z += child.userData.speed;
      });

      nodes.forEach((node) => {
        const { angle, radius, speed } = node.userData;
        const next = angle + t * speed * 35;
        node.position.x = Math.cos(next) * radius;
        node.position.z = Math.sin(next) * radius;
        node.position.y = Math.sin(t * 0.8 + angle * 2) * 0.72;
      });

      renderer.render(scene, camera);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);

    cleanup = () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.LineSegments) {
          object.geometry?.dispose();
          const material = object.material;
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material?.dispose();
          }
        }
      });
    };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, [canRender3d, mode, paletteKey]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div ref={mountRef} className="absolute inset-0" data-hero-canvas />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(34,211,238,.18),transparent_34%),radial-gradient(circle_at_46%_72%,rgba(245,158,11,.16),transparent_30%)]" />
      <div className="absolute bottom-8 right-6 hidden w-[min(34rem,42vw)] gap-3 lg:grid">
        {labels.slice(0, 3).map((label, index) => (
          <div
            key={label}
            className="border border-white/15 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-slate-950/20 backdrop-blur-md"
            style={{ transform: `translateX(${index * 34}px)` }}
          >
            <span className="mr-3 text-cyan-200">0{index + 1}</span>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
