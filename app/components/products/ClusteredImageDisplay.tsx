"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
};

export default function ClusteredImageDisplay({ images }: Props) {
  const [rotation, setRotation] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set window width on client-side only
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.1); // slower rotation
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!images || images.length === 0) return null;
  const mainImage = images[0];
  const others = images.slice(1);
  const isMd = windowWidth >= 768;
  const radius = isMd ? 180 : 140;

  return (
    <div className="relative w-[343px] h-[377px] md:w-[500px] md:h-[500px] mx-auto">
      {/* Main image in center */}
      <div className="absolute top-1/2 left-1/2 w-[160px] h-[160px] -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          src={mainImage}
          alt="Main"
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* Orbiting images */}
      {others.map((img, idx) => {
        const angle =
          ((2 * Math.PI) / others.length) * idx + (rotation * Math.PI) / 180;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        const isLarge = idx % 2 === 0;
        const size = isLarge ? (isMd ? 130 : 80) : isMd ? 90 : 50;

        return (
          <div
            key={idx}
            className="absolute"
            style={{
              top: `calc(50% - ${size / 2}px)`,
              left: `calc(50% - ${size / 2}px)`,
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div
              className="relative"
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            >
              <Image
                src={img}
                alt={`Orbit ${idx + 1}`}
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
