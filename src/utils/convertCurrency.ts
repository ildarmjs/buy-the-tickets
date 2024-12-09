export const convertCurrency = (price: number, currency: 'RUB' | 'USD' | 'EUR'): number => {
	const exchangeRates = {
		RUB: 1,       // Курс RUB к рублю 1:1
		USD: 0.012,    // Курс 1 RUB = 0.012 USD
		EUR: 0.011,    // Курс 1 RUB = 0.011 EUR
	}

	return price * exchangeRates[currency]
}

export const getCurrencySymbol = (currency: 'RUB' | 'USD' | 'EUR'): string => {
	const symbols = {
		RUB: '₽',
		USD: '$',
		EUR: '€',
	}

	return symbols[currency] || '₽'
}