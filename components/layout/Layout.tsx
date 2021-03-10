import Head from "next/head";
import { FC } from "react";
import { Header } from "./Header";
import { ContentLayout, ContentLayoutProps } from "./ContentLayout";

const name = "Dmitri Sakali";
export const siteTitle = "BullitBlog - Frontend Developer";
export const description = "BullitBlog - Frontend Developer";

interface Props extends ContentLayoutProps {}

export const Layout: FC<Props> = ({ home, contentHeader, children }) => {
  return (
    <div
      className={
        "bg-coolGray-700 dark:bg-coolGray-800 min-h-screen h-full overflow-hidden"
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
      <ContentLayout home={home} contentHeader={contentHeader}>
        {children}
      </ContentLayout>
    </div>
  );
};
