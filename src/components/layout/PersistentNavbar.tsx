"use client";

import { useRef, useLayoutEffect, useState } from "react";
import NavBar from "./NavBar";
import AboutDrawer from "../ui/drawer";
import { setNavbarElement } from "../store/NavbarStore";

export default function PersistentNavbar() {
  const ref = useRef<HTMLDivElement>(null);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Use useLayoutEffect instead of useEffect to register BEFORE Hero runs
  useLayoutEffect(() => {
    if (ref.current) {
      console.log("PersistentNavbar useLayoutEffect: Setting navbar element", ref.current);
      setNavbarElement(ref.current);
    }
  }, []);

  return (
    <>
      {/* NAVBAR WRAPPER */}
<div
  ref={ref}
  className="
    fixed
    top-0
    left-0
    w-full
    px-3
    lg:px-6
    pt-2
    pointer-events-none
    z-[500]
  "
  style={{ mixBlendMode: "difference" }}
>
        <div className="pointer-events-auto">
          <NavBar onOpenAbout={() => setAboutOpen(true)} />
        </div>
      </div>

      {/* ✅ DRAWER LIVES HERE NOW */}
      <AboutDrawer
        open={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />
    </>
  );
}
