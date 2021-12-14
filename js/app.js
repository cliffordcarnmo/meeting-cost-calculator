let m = new Meeting();

const $ = x => document.getElementById(x);

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
    $("addRoleButton").onclick = () => {
	let participant = new Role($("roleName").value,
				   parseInt($("roleWage").value),
				   parseInt($("socialCost").value));
	let participants = parseInt($("roleCount").value);

	for(let i = 0; i < participants; i++){
	    m.addParticipants(participant);
	}

	updateRoleList();
    };
};

function startTicker() {
    m.startMeeting();
}
