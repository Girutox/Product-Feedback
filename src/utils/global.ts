export const capitalizeFirstLetter = (text: string) => {
  return text.length ? `${text[0].toUpperCase()}${text.substring(1)}` : text
}