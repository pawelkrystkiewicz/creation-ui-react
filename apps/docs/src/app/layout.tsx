/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import '../index.css'
import Providers from './providers'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import Error from './error'

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

export default async function RootLayout({ children }: any) {
  const banner = (
    <Banner storageKey='cui-banner'>Creation UI 15.0 is released 🎉</Banner>
  )

  const navbar = (
    <Navbar
      logo={
        <div>
          <b>CUI</b> <span>React design system</span>
        </div>
      }
    />
  )
  const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <body>
        <ErrorBoundary errorComponent={Error}>
          <Layout
            banner={banner}
            navbar={navbar}
            footer={footer}
            editLink='Edit this page on GitHub'
            docsRepositoryBase='https://github.com/shuding/nextra/blob/main/examples/docs'
            sidebar={{ defaultMenuCollapseLevel: 2 }}
            pageMap={await getPageMap('/')}
          >
            <Providers>{children}</Providers>
          </Layout>
        </ErrorBoundary>
      </body>
    </html>
  )
}
