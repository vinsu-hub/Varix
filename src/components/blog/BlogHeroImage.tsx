"use client";

import { useState } from "react";

export function BlogHeroImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div className="h-64 w-full sm:h-80 lg:h-96 bg-gradient-to-br from-brand/20 via-brand/10 to-transparent" />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="h-64 w-full object-cover sm:h-80 lg:h-96"
      onError={() => setErrored(true)}
    />
  );
}
