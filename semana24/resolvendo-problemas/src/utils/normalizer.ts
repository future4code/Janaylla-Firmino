export const normalizer = (str: string): string => {
  str = str
    .replace(/[áãâà]/g, "a")
    .replace(/[éêẽ]/g, "e")
    .replace(/[í]/g, "i")
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
  
  return str
}
