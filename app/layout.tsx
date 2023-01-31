import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
          </nav>
        </main>
        {children}
      </body>
    </html>
  );
}
