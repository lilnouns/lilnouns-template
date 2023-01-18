import type {NextPage} from "next";
import Head from "next/head";
import {useIsMounted} from "../hooks";

const Home: NextPage = () => {
  const isMounted = useIsMounted()

  if (!isMounted) return null
  return (
    <>
      <Head>
        <title>Lil Nouns</title>
        <meta name="description" content=""/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="tw-flex tw-h-screen tw-justify-center tw-items-center">
        <div className="tw-m-auto">
          <h1 className="tw-text-3xl">Lil Nouns</h1>
          <p className="tw-text-xl">We are building something!</p>
        </div>
      </main>
    </>
  );
};

export default Home;
