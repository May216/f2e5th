export const pseudoJoin = (selector, str) => {
  return `${selector}:${str.split(' ').join(' ' + selector + ':')}`
}