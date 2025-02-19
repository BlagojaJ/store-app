export function getCookie(key: string) {
  const cookie = document.cookie
    ?.split('; ')
    .find((c) => c.startsWith(key))
    ?.split('=')[1];

  return cookie ?? '';
}

export function currencyFormat(amount: number) {
  return '$' + (amount / 100).toFixed(2);
}
