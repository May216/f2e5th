export const getImageUrl = image => {
  return new URL(`./assets/${image}`, import.meta.url).href
}

export const getFormattedDate = dateStr => {
  const date = new Date(dateStr)
  const monthAbbr = date.toLocaleString('en', { month: 'short' })
  const day = date.getDate()
  return `${day} ${monthAbbr.toUpperCase()}.`
}
