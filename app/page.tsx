import Link from "next/link";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <div>
      <div className={styles.hero}>
        <h1>Feel Like Spending a Penny?</h1>
      </div>

      <div className={styles.benefits}>
        <div className={styles.benefit}>Good for you</div>
        <div className={styles.benefit}>Tastes great</div>
        <div className={styles.benefit}>Low price</div>
      </div>

      <div className={styles["items-wrapper"]}>
        <div className={styles.items}>
          <Link href="/products/1" style={{textDecoration: 'none'}}>
            <div className={styles.item}>
              <h3>Smiley JPEG</h3>
              <div className={styles["item-example"]}>:)</div>
              <button className={styles["buy-button"]}>Buy Now</button>
            </div>
          </Link>
          <Link href="/products/2" style={{textDecoration: 'none'}}>
            <div className={styles.item}>
              <h3>Frowney JPEG</h3>
              <div className={styles["item-example"]}>:(</div>
              <button className={styles["buy-button"]}>Buy Now</button>
            </div>
          </Link>
          <Link href="/products/3" style={{textDecoration: 'none'}}>
            <div className={styles.item}>
              <h3>Smiley JPEG (with Nose)</h3>
              <div className={styles["item-example"]}>:^)</div>
              <button className={styles["buy-button"]}>Buy Now</button>
            </div>
          </Link>
          <Link href="/products/4" style={{textDecoration: 'none'}}>
            <div className={styles.item}>
              <h3>Wild Card Face</h3>
              <div className={styles["item-example"]}>?</div>
              <button className={styles["buy-button"]}>Buy Now</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
