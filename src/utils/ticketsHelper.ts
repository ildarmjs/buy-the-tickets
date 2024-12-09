import { TypeTickets } from "../types/types.tickets";

export const filterTickets = (tickets: TypeTickets[], selectedFilters: any): TypeTickets[] => {
	return tickets.filter(ticket => {
		if (selectedFilters.all) return true;
		if (selectedFilters.noStops && ticket.stops === 0) return true;
		if (selectedFilters.oneStop && ticket.stops === 1) return true;
		if (selectedFilters.twoStops && ticket.stops === 2) return true;
		if (selectedFilters.threeStops && ticket.stops === 3) return true;
		return false;
	});
};

export const sortTickets = (tickets: TypeTickets[], sortCriteria: string): TypeTickets[] => {
	return [...tickets].sort((a, b) => {
		switch (sortCriteria) {
			case 'price':
				return a.price - b.price; // Сортировка по цене
			case 'departureTime':
				return (
					new Date(`${a.departure_date} ${a.departure_time}`).getTime() -
					new Date(`${b.departure_date} ${b.departure_time}`).getTime()
				); // Сортировка по времени вылета
			case 'arrivalTime':
				return (
					new Date(`${a.arrival_date} ${a.arrival_time}`).getTime() -
					new Date(`${b.arrival_date} ${b.arrival_time}`).getTime()
				); // Сортировка по времени прибытия
			case 'stops':
				return a.stops - b.stops; // Сортировка по количеству пересадок
			default:
				return 0;
		}
	});
};