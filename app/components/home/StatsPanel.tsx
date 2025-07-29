"use client";

import StatItem from "./StatItem";

type Stats = {
  id: number;
  name: string;
  value: string;
};

type Props = {
  keyId: number;
  stats: Stats[];
};

export default function StatsPanel({ keyId, stats }: Props) {
  return (
    <div className="md:w-[15%] flex flex-row md:flex-col gap-6 justify-center">
      {stats.map((stat, index) => (
        <StatItem
          key={stat.id}
          keyId={keyId}
          value={stat.value}
          label={stat.name}
          delay={0 + index * 0.25}
        />
      ))}
    </div>
  );
}
