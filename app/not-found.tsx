"use client"; // optional, if you want client-side interactivity

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-fit p-10">
      <h1 className="text-6xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-lg text-gray-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80"
      >
        Go Home
      </Link>
    </main>
  );
}
