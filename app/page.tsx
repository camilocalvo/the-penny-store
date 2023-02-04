import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <div>
      <h1>The Penny Store</h1>
      <div className={styles['main-content']}>
        <h3>Smiley JPEG</h3>
        <h3>Frowney JPEG</h3>
        <h3>Smiley JPEG (with Nose)</h3>
      </div>
    </div>
  );
}
