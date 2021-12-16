let meeting = new Meeting();
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    meeting = JSON.parse(atob(params.get("p")));
    secondsInMeeting = Math.abs(new Date(meeting.startTime) - new Date(meeting.endTime)) /1000;
    costPerSec = meeting.cost / secondsInMeeting;
    document.getElementById("participants").innerHTML = meeting.participants.length;
    document.getElementById("time").innerHTML = meeting.time;
    document.getElementById("cost").innerHTML = "€" + meeting.cost;
    document.getElementById("costPerSec").innerHTML = "€" + (meeting.cost / secondsInMeeting).toFixed(2);
    document.getElementById("forest").innerHTML =(meeting.cost * 5 ).toFixed(1) + "m² forest";    
}
