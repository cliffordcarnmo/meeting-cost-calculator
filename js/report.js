let r = new Meeting();

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const r = JSON.parse(atob(params.get("report")));
    document.getElementById("participants").innerHTML = r.participants.length;
    document.getElementById("time").innerHTML = r.time;
}