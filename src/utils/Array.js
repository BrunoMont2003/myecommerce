export const removeItem = (array, value) => {
  const index = array.findIndex((i) => i === value)
  array.splice(index, 1)
}
