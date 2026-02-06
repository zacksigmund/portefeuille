import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Zack Sigmund</h1>
          <p>
            Hi, I'm Zack, a senior full stack software engineer based out of Cleveland, OH. This site is under construction.
          </p>
        </div>
      </main>
    </div>
  );
}
