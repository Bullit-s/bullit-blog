import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { FC } from "react";
import { Header } from "./Header";

const name = "Dmitri Sakali";
export const siteTitle = "Frontend Developer";

interface Props {
  home?: boolean;
}

export const Layout: FC<Props> = ({ children, home }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <header className={styles.header}>
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      </header>
      <main>
        <div className={"max-w-screen-xl mx-auto"}>{children}</div>
      </main>
      {/*{!home && (*/}
      {/*  <div className={styles.backToHome}>*/}
      {/*    <Link href="/">*/}
      {/*      <a>← Back to home</a>*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};
