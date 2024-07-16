import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

//  <main className={`${styles.main} ${inter.className}`}>

export default function Layout({ children }) {
  return (
    <div className={`${inter.className}, layout`}>
      <header>
        <Link href="/">
          <h1>
            <span>Just Add</span>
            <span>Marmite</span>
          </h1>
          <h2>Spread The Joy</h2>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div>
  );
}
