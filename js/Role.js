class Role{
    constructor(name, averageWage, socialCost) {
	this.name = name;
	this.averageWage = averageWage;
	this.socialCost = socialCost;
    }

    getName() {
	return this.name;
    }

    getMonthlyWage() {
	return this.averageWage;
    }

    getSalaryPerSecond() {
	const workableDaysInMonth = 21;
	const workableHoursInDay = 8;
	const minutesInHour = 60;
	const secondsInMinute = 60;
	return this.averageWage / workableDaysInMonth / workableHoursInDay / minutesInHour / secondsInMinute;
    }

    getSocialCost() {
	return this.socialCost;
    }
}
