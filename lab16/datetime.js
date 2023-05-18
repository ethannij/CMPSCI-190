function telltime() {
    var out = "";
    var now = new Date();
    out += "<br/>Date: " + now.getDate();
    out += "<br/>Month: " + now.getMonth();
    out += "<br/>Year: " + now.getFullYear();
    out += "<br/>Hours: " + now.getHours();
    out += "<br/>Minutes: " + now.getMinutes();
    out += "<br/>Seconds: " + now.getSeconds();
    document.getElementById("div1").innerHTML = out;
}

window.onload = function() {
    telltime(); // Initial clock display

    // Update clock at regular intervals (every second in this example)
    setInterval(function() {
        telltime();
    }, 1000);
}