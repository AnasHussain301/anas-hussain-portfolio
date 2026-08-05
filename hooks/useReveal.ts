"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useReveal(selector: string) {
  useEffect(() => {
    gsap.from(selector, {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
      },
    });
  }, [selector]);
}