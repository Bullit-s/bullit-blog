import Head from "next/head";
import { Layout, siteTitle } from "../../components/layouts/Layout";
import { getSortedPostsData } from "../../lib/posts";
import { PageHeader } from "../../components/layouts/PageHeader";

interface Resource {
  id: string;
  date: string;
  title: string;
}

const Resources = ({ resourcesList }: { resourcesList: Resource[] }) => {
  return (
    <Layout
      contentHeader={
        <PageHeader
          title={"Resources"}
          text={"bla blabla blabla blabla blabla blabla blabla bla"}
        />
      }
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      a list
    </Layout>
  );
};

export default Resources;

export async function getStaticProps() {
  const resourcesList = getSortedPostsData();
  return {
    props: {
      resourcesList,
    },
  };
}
