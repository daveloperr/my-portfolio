"use client";

import { useState } from "react";
import Loader from "./Loader";

export default function AppLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Loader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}

      {!loading && children}
    </>
  );
}