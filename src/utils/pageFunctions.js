export const slicePrice = (price) => {
  if (price) {
    const stringPrice = price.toString()
    return `${stringPrice.slice(0, stringPrice.indexOf('.') - 3)} ${stringPrice
      .split('.')[0]
      .slice(-3)}.${stringPrice.split('.')[1]}`
  }
}

export const scrollToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant',
  })
}
