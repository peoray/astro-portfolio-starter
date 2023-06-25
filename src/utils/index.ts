export const formatDate = (dateStr: Date) => {
  return dateStr.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export const deslugify = (str: string) => {
  return str
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char: string) => char.toUpperCase())
}
