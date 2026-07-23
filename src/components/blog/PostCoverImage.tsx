"use client";

import { useState } from "react";

export function PostCoverImage({
  src,
  alt,
  className,
}: {
  src: string | null;
  alt: string;
  className: string;
}) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return <div className={`bg-gradient-to-br from-brand/20 via-brand/10 to-transparent ${className}`} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={`object-cover ${className}`} onError={() => setErrored(true)} />
  );
}
