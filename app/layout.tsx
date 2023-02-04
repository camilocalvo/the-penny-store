import styles from "./page.module.scss";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body style={{ margin: 0 }}>
        <header className={styles.header}>
          <nav className={styles.navigation}>
            <Link href="/" className={styles["header-item"]}>
              Home
            </Link>
            <Link href="/about" className={styles["header-item"]}>
              About Us
            </Link>
          </nav>
          <h2 className={styles["header-logo"]}>The Penny Store</h2>
          <div>Cart (0)</div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
