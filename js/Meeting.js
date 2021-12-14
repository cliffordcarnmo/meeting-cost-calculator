class Meeting{
    constructor(){
	this.startTime = 0;
	this.meetingCost = 0;
	this.participants = [];
    }

    startMeeting(){
	this.startTime = new Date();
	setInterval(this.showMeetingCost, 1000);
    }

    showMeetingCost(){
	document.getElementById("meetingCost").innerHTML = "<p>Elapsed time: <strong>" + new Date(m.getElapsedTime() * 1000).toISOString().substr(11, 8) + "</strong></p><p>Estimated cost: <strong>€" + m.getMeetingCostPerSecond().toFixed(2) + "</strong></p>";
    }

    addParticipants(role){
	this.participants.push(role);
    }

    clearParticipants(){
	this.participants = [];
    }

    getParticipants(){
	return this.participants;
    }

    getStartTime(){
	return this.startTime;
    }

    getElapsedTime(){
	let diff = new Date() - this.startTime;
	diff /= 1000;
	return Math.round(diff);
    }

    getMeetingCostPerSecond() {
	for (let i = 0; i < this.participants.length; i++) {
	    this.meetingCost += this.participants[i].getSalaryPerSecond();
	    this.meetingCost += this.meetingCost * this.participants[i].getSocialCost();
	}
	return this.meetingCost;
    }
}
