import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { Date } from "../components/date";
import Image from "next/image";


export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-lg text-center p-2">
        <div>
          <p className="text-xl p-2">
            Hey, I'm <span className="font-semibold">Geoff</span> 👋
          </p>
          <p>
            I'm an entrepreneur & frontend developer 🧑‍💻 <br /> Hit me up on{" "}
            <a href="https://twitter.com/unionpac_" target="_blank">
              Twitter
            </a>
            .
          </p>
          <hr className="mt-4 border-2" />
        </div>
      </section>
      <section className="p-2 leading-[1.5] mt-4">
        <ul>
          {allPostsData.map((post) => {
            const { id, date, title } = post;
            return (
              <li key={id} className="mb-[1.25rem]">
                <Link className="text-[1.1rem]" href={`/posts/${id}`}>
                  {title}
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
