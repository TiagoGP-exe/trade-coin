export const formatNumber = (value: number, currencySelected: string) => {
  return new Intl.NumberFormat(verifyLocale(currencySelected.toUpperCase()), {
    style: 'currency',
    currency: currencySelected.toUpperCase()
  }).format(value)
}

const verifyLocale = (value: string) => {
  switch (value) {
    case 'USD':
      return 'en-US'
    case 'EUR':
      return 'de-DE'
    case 'BRL':
      return 'pt-BR'
  }
}
