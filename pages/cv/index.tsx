import Head from "next/head";
import { Layout, siteTitle } from "../../components/layouts/Layout";
import { PageHeader } from "../../components/layouts/PageHeader";

const Resources = () => {
  return (
    <Layout
      contentHeader={
        <PageHeader
          title={"CV"}
          text={"bla blabla blabla blabla blabla blabla blabla bla"}
          imagePath={"/images/resume2.svg"}
        />
      }
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      a cv
    </Layout>
  );
};

export default Resources;
