"use client";

import { JSX, useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function NetworkVisualization() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xd1d5db,
        backgroundColor: 0x030712,
        points: 10,
        maxDistance: 20.0,
        spacing: 18.0,
        showDots: true,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-gray-800 bg-black/40 shadow-lg backdrop-blur-sm md:flex-row">
        {/* Vanta Visualization */}
        <div ref={vantaRef} className="relative h-72 md:h-auto md:w-1/2">
          <div className="absolute left-4 top-4 z-10">
            <span className="mb-2 inline-block rounded-full bg-gray-800/80 px-2 py-1 text-xs text-gray-400">
              VISUALIZATION
            </span>
            <h2 className="text-2xl font-bold text-white">Global Network</h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-gray-400"></div>
          </div>
          <div className="absolute bottom-4 left-4 z-10 rounded-lg bg-black/50 px-3 py-2 backdrop-blur-sm">
            <div className="flex space-x-4 text-xs text-gray-300">
              <div className="flex items-center">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-gray-300"></span>
                <span>Nodes</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-gray-500"></span>
                <span>Connections</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col justify-between bg-gray-900 p-6 md:w-1/2">
          <div>
            <span className="mb-2 inline-block rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-400">
              OVERVIEW
            </span>
            <h3 className="mb-4 text-xl font-semibold text-gray-200">
              Network Infrastructure
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Our global infrastructure connects key locations through a
              resilient mesh topology, ensuring high availability and optimal
              performance for all clients.
            </p>

            {/* Stats */}
            <div className="mb-6 space-y-4">
              <ProgressBar label="NETWORK UPTIME" value="99.8%" width="99.8%" />
              <ProgressBar
                label="DATA CENTERS"
                value="12 LOCATIONS"
                width="85%"
              />
              <ProgressBar label="EDGE NODES" value="128 ACTIVE" width="75%" />
            </div>
          </div>

          <div className="mt-auto border-t border-gray-800 pt-4">
            <div className="flex justify-between text-sm">
              <ActionButton icon="eye" label="View Details" />
              <ActionButton icon="info" label="Status" secondary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-300">{label}</span>
        <span className="text-xs text-gray-400">{value}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
        <div
          className="h-full rounded-full bg-gray-400"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}

function ActionButton({
  icon,
  label,
  secondary = false,
}: {
  icon: "eye" | "info";
  label: string;
  secondary?: boolean;
}) {
  const icons: Record<string, JSX.Element> = {
    eye: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path
          fillRule="evenodd"
          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
    info: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return (
    <button
      className={`px-4 py-2 ${
        secondary
          ? "bg-black text-gray-300 hover:bg-gray-800"
          : "bg-gray-800 text-gray-200 hover:bg-gray-700"
      } flex items-center rounded-lg transition`}
    >
      {icons[icon]}
      {label}
    </button>
  );
}
