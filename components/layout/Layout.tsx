import Head from "next/head";
import { FC } from "react";
import { Header } from "./Header";

const name = "Dmitri Sakali";
export const siteTitle = "BullitBlog - Frontend Developer";
export const description = "BullitBlog - Frontend Developer";

interface Props {
  home?: boolean;
}

export const Layout: FC<Props> = ({ children, home }) => {
  return (
    <div
      className={
        "duration-200 pt-20 dark:bg-coolGray-700 dark:text-amber-50 min-h-screen"
      }
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
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
      <main className={"w-full "}>
        <div className={"max-w-screen-xl px-2 mx-auto"}>{children}</div>
      </main>
    </div>
  );
};
