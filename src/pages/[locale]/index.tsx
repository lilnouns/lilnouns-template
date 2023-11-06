import { useIsMounted } from '@/hooks'
import { londrinaSolid } from '@/styles/fonts'
import clsx from 'clsx'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const isMounted = useIsMounted()

  if (!isMounted) return null
  return (
    <>
      <Head>
        <title>Lil Nouns</title>
        <meta name="description" content="We are building something!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={clsx(
          londrinaSolid.variable,
          'tw-flex tw-h-screen tw-items-center tw-justify-center tw-font-sans',
        )}
      >
        <div className="tw-m-auto">
          <h1 className="tw-text-3xl">Lil Nouns</h1>
          <p className="tw-text-xl">We are building something!</p>
        </div>
      </main>
    </>
  )
}

export default Home
