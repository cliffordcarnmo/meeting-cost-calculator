
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    r = JSON.parse(atob(params.get("p")));
    document.getElementById("participants").innerHTML = r.participants.length;
    document.getElementById("time").innerHTML = r.time;
    document.getElementById("cost").innerHTML = "€ " + r.cost;
    console.log(r);
}
