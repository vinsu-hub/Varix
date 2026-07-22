"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

const HLS_URL =
  "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8";

export function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: false });
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      return () => {
        hls.destroy();
      };
    }

    // Fallback for native HLS support (Safari)
    video.src = HLS_URL;
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* Dark gradient from left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, var(--background) 0%, transparent 60%)",
        }}
      />

      {/* Bottom-up gradient for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, var(--background) 0%, transparent 50%)",
        }}
      />

      {/* Vertical grid lines at 25%, 50%, 75% — desktop only */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/10" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10" />
        <div className="absolute top-0 bottom-0 left-3/4 w-px bg-white/10" />
      </div>

      {/* Central SVG glow — cyan ellipse with Gaussian blur */}
      <svg
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        width="800"
        height="400"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow-blur">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>
        <ellipse
          cx="400"
          cy="200"
          rx="350"
          ry="150"
          fill="rgba(6, 182, 212, 0.12)"
          filter="url(#glow-blur)"
        />
      </svg>
    </div>
  );
}
