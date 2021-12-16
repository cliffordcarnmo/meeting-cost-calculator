class Meeting {

    constructor() {
	this.startTime = 0;
	this.endTime = 0;
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
	    this.endTime = new Date();
	    const param = btoa((JSON.stringify(this.toJSON(), null, 2)));
	    document.getElementById("reportDiv").style.display = 'block';
	    document.getElementById("reportLink").href = 'report.html?p='+param;
	    //console.log(param);
	}
    }

    startMeeting() {
	this.startTime = new Date();
	document.getElementById("reportDiv").style.display = 'none';
	this.started = setInterval(this._tickMeeting.bind(this), 1000);
	this._tickMeeting();
    }

    _tickMeeting() {
	document.getElementById("meetingCost").innerHTML = this.getMeetingCostHTML(this.getMeetingSummary());
	this.updateTrees();

    }

    toJSON() {
	return this.getMeetingSummary(true);
    }

    fromJSON(json) {
	const m = new Meeting();
	json.participants.forEach(p => m.addParticipant(p));
	m.startTime = json.startTime;
	m.endTime = json.endTime;
	m.started = n.endTime !== 0;
	return m;
    }

    updateTrees() {
	let currentTreeCount = document.getElementById("trees").children.length;
	const wantedTreeCount = Math.floor(this.getMeetingCost());
	while(currentTreeCount < wantedTreeCount) {
	    const tree = document.createElement('div');
	    tree.setAttribute('class', 'tree');
	    tree.style.float = 'left';
	    tree.innerHTML = '&#127794;';
	    document.getElementById("trees").appendChild(tree);
	    currentTreeCount++;
	}
	document.getElementById("numtrees").innerText = currentTreeCount;
    }

    getMeetingSummary(full=false) {
	return {startTime: this.startTime,
		endTime: this.endTime,
		participants: full ? this.getParticipants() : null,
		time: new Date(this.getElapsedTime() * 1000).toISOString().substr(11, 8),
		cost: this.getMeetingCost().toFixed(2)};
    }

    getMeetingCostHTML(data) {
	const template = document.getElementById("meetingCostTemplate").innerHTML;
	return template.replace(/{(.+?)}/g, (match) => {
	    const k = match.substr(1, match.length-2);
	    return data[k];
	});
    }

    addParticipant(role) {
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
