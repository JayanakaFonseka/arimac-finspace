"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
};

export default function ClusteredImageDisplay({ images }: Props) {
  if (!images || images.length === 0) return null;

  const mainImage = images[0];
  const others = images.slice(1);
  const radius = 180;

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.1); // slower rotation
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[500px] h-[500px] mx-auto">
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
        const size = isLarge ? 130 : 90;

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
