// date from react-date-range calendar to local date string
function displayDates(dt) {
	return `${dt.startDate.toLocaleDateString()} - ${dt.endDate.toLocaleDateString()}`
}

export default displayDates
