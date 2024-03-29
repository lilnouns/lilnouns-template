import { londrinaSolid } from '@/styles/fonts'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${londrinaSolid.style.fontFamily};
        }
      `}</style>
      <main className="tw-font-londrina-solid">{children}</main>
    </>
  )
}

export default Layout
