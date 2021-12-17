let m = new Meeting();

const $ = x => document.getElementById(x);

const startTicker = () => {
    if(m.getParticipants().length < 1) {
	return false;
    }
    $("treeTicker").style.display = "inline";

    if(m.isStarted()) {
	$("startMeeting").value="Start meeting";
	m.endMeeting();
    } else {
	$("startMeeting").value="End meeting";
	m.startMeeting();
    }
}

const updateRoleList = () => {
    const template = $("roleTemplate").innerHTML;
    const unique = {};
    const counts = {};
    m.getParticipants().forEach(p => {
	const k = p.getKey();
	unique[k] = p;
	counts[k] = counts[k] ? counts[k] + 1 : 1;
    });
    $("roleList").innerHTML = 
	Object.keys(unique).map(k => {
	    const data = Object.assign({count: counts[k]}, unique[k]);
	    return template.replace(/{(.+?)}/g, (match) => data[match.substr(1, match.length-2)]);
	}).join('');
};

window.onload = () => {
    $("startMeeting").onclick = startTicker;
	$("treeTicker").style.display = "none";
    $("addRoleButton").onclick = () => {
	const participant = new Role($("roleName").value,
				     parseInt($("roleWage").value),
				     parseFloat($("socialCost").value));
	const participants = parseInt($("roleCount").value);
	if(!Validator.isPositiveInteger(participants) ||
	   !Validator.isNotEmpty(participant.getName().trim()) ||
	   !Validator.isPositiveInteger(participant.getMonthlyWage()) ||
	   !Validator.isPositiveDouble(participant.getSocialCost())) {
	    alert('You must specify all fields correctly');
	    return;
	}

	for(let i = 0; i < participants; i++){
	    m.addParticipant(participant);
	}

	updateRoleList();
	$("startMeeting").disabled = false;
    };
};
