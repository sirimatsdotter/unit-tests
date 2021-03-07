export const findIndex = (array, value) => {
  if (array.includes(value)) {
    return array.indexOf(value)
  } else {
    return -1
  }
}
