export const quantityTickets = (quantity: number) => {

	if (quantity >= 1 && quantity < 2) {
		return `${quantity} билет`
	}
	if (quantity >= 2 && quantity <= 4) {
		return `${quantity} билета`
	}
	if (quantity >= 5 && quantity <= 20) {
		return `${quantity} билетов`
	}
	return `${quantity} билет`
}