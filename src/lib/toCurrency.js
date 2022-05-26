const dollarFormat = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const toCurrency = (currencyFormat) => (number) =>
  currencyFormat.format(number);

export const toDollars = toCurrency(dollarFormat);
