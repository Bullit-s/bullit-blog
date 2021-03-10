import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "../../components/layout/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { Date } from "../../components/Date";
import utilStyles from "../../styles/utils.module.css";

interface PostData {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}

const Post = ({ postData }: { postData: PostData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date value={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
