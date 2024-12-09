export const convertDate = (dateStr: string): string => {

	const [day, month, year] = dateStr.split('.').map(Number);

	const fullYear = year < 50 ? 2000 + year : 1900 + year;

	const months = [
		'января', 'февраля', 'марта', 'апреля', 'мая',
		'июня', 'июля', 'августа', 'сентября', 'октября',
		'ноября', 'декабря'
	];

	const weekdays = [
		'вск', 'пн', 'вт',
		'ср', 'чт', 'пт', 'сб'
	];

	const date = new Date(fullYear, month - 1, day);

	const weekday = weekdays[date.getDay()];

	return `${day} ${months[month - 1]} ${fullYear}, ${weekday.charAt(0).toUpperCase() + weekday.slice(1).toLowerCase()}`;
}