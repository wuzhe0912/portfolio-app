import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.text}>
            <p>Hello!</p>
            <h1>John</h1>
            <h2>Frontend</h2>
          </div>
          <div className={styles.image}></div>
        </div>
      </div>
    </section>
  );
}
