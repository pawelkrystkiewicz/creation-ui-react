/* eslint-env node */
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import '../index.css'
import Error from './error'
import Providers from './providers'
import { Manrope, Fira_Code } from 'next/font/google'
import clsx from 'clsx'
import { Logo } from '@/components/logo'

export const metadata = {
  metadataBase: new URL('https://creation-ui.com'),
  title: {
    absolute: 'Creation UI',
    template: '%s - CUI',
  },
  description: 'Creation UI - a TailwindCSS UI library for React',
  applicationName: 'Creation UI',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Creation UI',
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://creation-ui.com',
  },
}

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export default async function RootLayout({ children }: any) {
  const banner = (
    <Banner storageKey='cui-banner'>Creation UI 16.0 is released 🎉</Banner>
  )

  const navbar = (
    <Navbar
      logo={
        <div className='flex items-center gap-2'>
          <Logo /> <span>React components library</span>
        </div>
      }
    />
  )
  const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

  return (
    <html
      lang='en'
      dir='ltr'
      suppressHydrationWarning
      className={clsx(manrope.variable, firaCode.variable)}
    >
      <Head>
        <script
          defer
          id='umami'
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
        />
      </Head>
      <body>
        <ErrorBoundary errorComponent={Error}>
          <Layout
            banner={banner}
            navbar={navbar}
            footer={footer}
            editLink='Edit this page on GitHub'
            docsRepositoryBase='https://github.com/pawelkrystkiewicz/creation-ui-react'
            sidebar={{ defaultMenuCollapseLevel: 2 }}
            pageMap={await getPageMap()}
          >
            <Providers>{children}</Providers>
          </Layout>
        </ErrorBoundary>
      </body>
    </html>
  )
}
