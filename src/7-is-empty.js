export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === 'object') {
    return Object.keys(stringArrayOrObject).length === 0
  }

  return false
}


//https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/