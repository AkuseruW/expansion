"use client";
import Image from "next/image";
import styles from "./styles/home.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Home() {
  // Create references for HTML elements to animate
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => { // Use GSAP animation hook
    // Check if all referenced elements are present before animating
    if (h1Ref.current && textRef.current && btnRef.current) {
      const tl = gsap.timeline(); // Create a GSAP timeline for sequencing animations

      // Animate the heading from transparent and slightly down to fully opaque and at original position
      tl.fromTo(
        h1Ref.current,
        { opacity: 0, y: 50 }, // Starting state
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" } // Ending state
      )
        // Animate the paragraph
        .fromTo(
          textRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5" // Overlap the end of this animation with the next one by 0.5 seconds
        )
        // Animate the button
        .fromTo(
          btnRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        // Animate the image from right off-screen to its original position
        .fromTo(
          imgRef.current,
          { x: '100vw' }, // Starting state: far right off-screen
          { x: '0', duration: 1.5, ease: 'power3.out' }, // Ending state: centered
          "-=0.5" // Overlap the end of this animation with the previous one by 0.5 seconds
        );
    }
  });

  return (
    <main className="container">
      <section className={styles.leftSection}>
        <h1 ref={h1Ref}>
          Nous vous <br /> accompagnons <br /> dans votre
          <span> expansion <br /> digitale</span>
        </h1>
        <p ref={textRef}>
          Le programme Digital Booster d’Expansion est <br />
          <span className={styles.span}> l’atout digital des petites, moyennes et <br /> grandes entreprises </span>
          qui souhaitent développer <br /> ou confirmer leur présence en ligne.
        </p>
        <button ref={btnRef} className={styles.button}>
          <Image src="/ico-rocket.svg" alt="Rocket" width={17.47} height={18.38} />
          Faites le test sans plus tarder
        </button>
      </section>

      <Image
        ref={imgRef}
        id="laptop"
        src="/laptop.svg"
        alt="Laptop"
        width={5000}
        height={5000}
        className={styles.laptop}
        priority
      />
    </main>
  );
}