import { Helmet } from 'react-helmet-async'
import { site } from '../content/site'

type SeoProps = {
  title?: string
  description?: string
  path?: string
}

export function Seo({ title, description = site.description, path = '/' }: SeoProps) {
  const fullTitle = title ? `${title} | ${site.name}` : site.title
  const url = `${site.url}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site.url}/og.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site.url}/og.png`} />
    </Helmet>
  )
}
