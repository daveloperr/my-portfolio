"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "../TransistionLayer";

interface NavBarProps {
  onOpenAbout: () => void;
}

export default function NavBar({ onOpenAbout }: NavBarProps) {
  const { navigate } = useTransition();
  const router = useRouter();
  const pathname = usePathname();

 useEffect(() => {
  console.log(
    "NAV EFFECT",
    pathname,
    window.location.hash,
    window.scrollY
  );

  if (pathname === "/" && window.location.hash) {
    const id = window.location.hash.replace("#", "");

    setTimeout(() => {
      console.log(
        "SCROLL INTO VIEW",
        id,
        window.scrollY
      );

      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 500);
  }
}, [pathname]);
  
const scrollTo = (id: string) => {
  if (pathname !== "/") {
    sessionStorage.setItem("pendingHash", id);
    navigate(`/#${id}`);
  } else {
    history.replaceState(null, "", `/#${id}`);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }
};
  return (
    <nav id="blur-navbar" className="w-full flex justify-between items-center text-[0.7rem] lg:text-[0.8rem]  uppercase tracking-wider text-white ">
      <div
        className="cursor-pointer"
        onClick={() => {
    if (pathname !== "/") {
        sessionStorage.setItem("navFromDetail", "true");
        navigate("/");
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}}
      >
        VaughnLopez
      </div>

      <div className="hidden md:block">Freelance Developer — UI / UX</div>

      <div className="flex gap-3 ">
        <button className="uppercase cursor-pointer" onClick={onOpenAbout}>About,</button>

        <button className="uppercase cursor-pointer" onClick={() => scrollTo("works")}>Work,</button>
        <button className="uppercase cursor-pointer" onClick={() => scrollTo("contact")}>Contact</button>
      </div>

      <div className="hidden sm:hidden md:block">Based in Manila, PH</div>    </nav>
  );
}