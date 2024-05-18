import Image from "next/image";
import styles from "./styles/home.module.scss";

export default function Home() {
  
  return (
    <main className="container">
      <section className={styles.leftSection}>
        <h1>
          Nous vous <br /> accompagnons <br /> dans votre
          <span> expansion <br /> digitale</span>
        </h1>
        <p>
          Le programme Digital Booster d’Expansion est <br />
          <span className={styles.span}> l’atout digital des petites, moyennes et <br /> grandes entreprises </span>
          qui souhaitent développer <br /> ou confirmer leur présence en ligne.
        </p>
        <button className={styles.button}>
          <Image src="/ico-rocket.svg" alt="Rocket" width={17.47} height={18.38} />
          Faites le test sans plus tarder
        </button>
      </section>

      <Image
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
