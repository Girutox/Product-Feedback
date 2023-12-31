export const capitalizeFirstLetter = (text: string) => {
  if (!text) return ''
  return text.length ? `${text[0].toUpperCase()}${text.substring(1)}` : text
}