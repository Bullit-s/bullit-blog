import Head from "next/head";
import { Layout, siteTitle } from "../../components/layouts/Layout";
import { PageHeader } from "../../components/layouts/PageHeader";

const Resources = () => {
  return (
    <Layout
      contentHeader={
        <PageHeader
          title={"Contacts"}
          text={"bla blabla blabla blabla blabla blabla blabla bla"}
          imagePath={"/images/contacts.svg"}
        />
      }
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      a contacts
    </Layout>
  );
};

export default Resources;
