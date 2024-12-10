export const getStops = (quantity: number) => {
	if (quantity === 0) {
		return 'Без пересадок'
	}
	if (quantity >= 1 && quantity < 2) {
		return `${quantity} пересадка`
	}
	if (quantity >= 2 && quantity < 5) {
		return `${quantity} пересадки`
	}

	return `${quantity} пересадок`
}