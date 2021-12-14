class Meeting {

    constructor() {
	this.startTime = 0;
	this.meetingCost = 0;
	this.participants = [];
	this.started = false;
    }

    isStarted() {
	return this.started !== false;
    }

    endMeeting() {
	if(this.started) {
	    clearInterval(this.started);
	    this.started = false;
	}
    }

    startMeeting() {
	this.startTime = new Date();
	this.started = setInterval(this.showMeetingCost, 1000);
	this.showMeetingCost();
    }

    showMeetingCost() {
	const data = {time: new Date(m.getElapsedTime() * 1000).toISOString().substr(11, 8),
		      cost: m.getMeetingCost().toFixed(2)};
	document.getElementById("meetingCost").innerHTML =
	    "<p>Elapsed time: <strong>" + data.time + "</strong></p>" +
	    "<p>Estimated cost: <strong>€" + data.cost + "</strong></p>";
    }

    addParticipants(role) {
	this.participants.push(role);
    }

    clearParticipants() {
	this.participants = [];
    }

    getParticipants() {
	return this.participants;
    }

    getStartTime() {
	return this.startTime;
    }

    getMeetingCost() {
	return this.getMeetingCostPerSecond() * this.getElapsedTime();
    }

    getElapsedTime() {
	return Math.round((new Date() - this.startTime) / 1000);
    }

    getMeetingCostPerSecond() {
	this.meetingCost = 0;
	for (let i = 0; i < this.participants.length; i++) {
	    this.meetingCost += this.participants[i].getSalaryPerSecond() *
		(1 + (this.participants[i].getSocialCost() / 100.0));
	}
	return this.meetingCost;
    }
}
