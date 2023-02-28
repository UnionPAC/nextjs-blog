import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Geoff Jamieson";
export const siteTitle = "geoff's blog";

const Layout = ({ children, home }) => {
  return (
    <div className="max-w-2xl px-4 mt-12 mx-auto mb-24">
      <Head>
        <link rel="icon" href="/images/cyclone.png" />
        <meta
          name="description"
          content="Learning how to use Next.js by building a simple blog!"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/square-cover.png"
              className="rounded-full border-[3px] border-black shadow-lg"
              height={140}
              width={140}
              alt=""
            />
            <h1 className="text-[45px] font-bold leading-[1.2rem] tracking-[-0.05rem] mt-8 mb-6">
              {name}
            </h1>
          </>
        ) : (
          <>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-10">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
