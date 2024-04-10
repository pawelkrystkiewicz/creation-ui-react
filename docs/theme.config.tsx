import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { BASE_URL, TITLE, TITLE_SHORT } from '@root/constants'
import { Logo } from '@components/logo'
import Footer from '@components/footer'
import React from 'react'

export default {
  // toc: {
  //   extraContent: <React.Fragment />,
  // },
  logo: <Logo size='lg' />,
  project: {
    link: 'https://github.com/creation-ui/react',
  },
  docsRepositoryBase: 'https://github.com/creation-ui/react/tree/master',
  primaryHue: 213,
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    link: 'Question? Give us feedback →',
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()

    return (
      <>
        <meta property='og:url' content={`${BASE_URL}${asPath}`} />
        <meta property='og:title' content={frontMatter.title || TITLE} />
        <meta property='og:description' content={frontMatter.description || 'React Tailwind components'} />
      </>
    )
  },
  useNextSeoProps: function SEO() {
    const { pathname } = useRouter()
    const { frontMatter } = useConfig()
    let title = TITLE

    if (pathname === '/docs') {
      return
    }

    if (pathname.includes('/docs/')) {
      title = TITLE_SHORT
    }

    const defaultTitle = frontMatter.overrideTitle || title

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `%s – ${title}`,
    }
  },
  footer: {
    component: Footer,
  },
  nextThemes: {
    defaultTheme: 'light',
  },
  search: {
    placeholder: 'Search docs…',
  },
}
