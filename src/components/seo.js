import * as React from 'react'
import useSiteMetadata from '../hooks/use-site-metadata'

const Seo = ({ title }) => {
  const data = useSiteMetadata();

  return (
    <title>{title} | {data.title}</title>
  )
}

export default Seo
