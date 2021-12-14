let m = new Meeting();

function startTicker() {
    let participant = new Role(document.getElementById("roleName").value, parseInt(document.getElementById("roleWage").value), parseInt(document.getElementById("averageSocialCost").value));
    let participants = parseInt(document.getElementById("roleCount").value);

    for(let i = 0; i < participants; i++){
	m.addParticipants(participant);
    }

    m.startMeeting();
}
