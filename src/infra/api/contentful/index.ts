import contentfulClient from './_contentfulClient'

const fetchPortfolioData = async (contentType: string) => {
  const res = await contentfulClient.getEntries({
    content_type: contentType
  })
  return res.items
}

export { fetchPortfolioData }