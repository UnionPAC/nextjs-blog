import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { Date } from "../../components/date";
import Link from "next/link";


const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <main className="mt-14">
        <div className="mb-14">
          <h2 className="text-2xl font-semibold py-2">{postData.title}</h2>
          <hr />
          <div className="flex justify-between pt-2">
            <small>
              <Date dateString={postData.date} />
            </small>
            <small>
              <Link href="/">Back to All Posts</Link>
            </small>
          </div>
        </div>

        <article className="prose mt-0 mb-0 dark:text-[#fafafa]">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </main>
    </Layout>
  );
};

export default Post;

export const getStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
