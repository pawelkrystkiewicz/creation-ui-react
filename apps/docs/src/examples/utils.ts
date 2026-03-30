interface CreateDocsLinkArgs {
  label: string
  component: string
  parent?: string
}

export const createDocsLink = ({
  parent,
  component,
  label,
}: CreateDocsLinkArgs) => {
  const base = '/docs/components'
  const link = [base, parent, component].filter(Boolean).join('/')

  return `<a href="${link}">${label}</a>`
}
