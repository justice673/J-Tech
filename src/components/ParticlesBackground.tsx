"use client";
import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  // initialize the engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("[Particles] init engine", engine);
      await loadSlim(engine);
      console.log("[Particles] slim bundle loaded");
    }).then(() => console.log("[Particles] engine ready"));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      fullScreen: { enable: true, zIndex: 50 },
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 140, duration: 0.45 },
          push: { quantity: 5 },
        },
      },
      particles: {
        number: { value: 140, density: { enable: true, area: 800 } },
        color: { value: "#22D3EE" },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: { min: 1, max: 5 } },
        links: {
          enable: true,
          distance: 150,
            color: "#22D3EE",
          opacity: 0.5,
          width: 1.2,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "out" },
        },
      },
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{ pointerEvents: "none" }}
    />
  );
}
