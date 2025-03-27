/* eslint-disable react-hooks/rules-of-hooks -- false positive, useMDXComponents isn't react hooks */

import { notFound } from 'next/navigation'
import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: any) {
  const params = await props.params

  try {
    const { metadata } = await importPage(params.mdxPath)
    return metadata
  } catch (error) {
    console.error(error)
    return {
      title: 'Page Not Found',
      description: 'This page does not exist.',
    }
  }
}

const Wrapper = useMDXComponents().wrapper

export default async function Page(props: any) {
  const params = await props.params
  try {
    const result = await importPage(params.mdxPath)

    const { default: MDXContent, toc, metadata } = result
console.log(metadata)
    return (
      <Wrapper toc={toc} metadata={metadata}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    )
  } catch (error) {
    console.error(error)
    return notFound()
  }
}
