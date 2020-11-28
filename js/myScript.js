function showInfo() {
    document.getElementById("info").style.display = "inline-block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("study").style.display = "none";
    document.getElementById("skill").style.display = "none";
    document.getElementById("aboutme").style.display = "none";
}

function showContact() {
    document.getElementById("info").style.display = "none";
    document.getElementById("contact").style.display = "inline-block";
    document.getElementById("study").style.display = "none";
    document.getElementById("skill").style.display = "none";
    document.getElementById("aboutme").style.display = "none";
}

function showStudy() {
    document.getElementById("info").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("study").style.display = "inline-block";
    document.getElementById("skill").style.display = "none";
    document.getElementById("aboutme").style.display = "none";
}

function showSkill() {
    document.getElementById("info").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("study").style.display = "none";
    document.getElementById("skill").style.display = "inline-block";
    document.getElementById("aboutme").style.display = "none";
}

function showAboutme() {
    document.getElementById("info").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("study").style.display = "none";
    document.getElementById("skill").style.display = "none";
    document.getElementById("aboutme").style.display = "inline-block";
}

var myVar = setInterval(myTimer, 1000);

function myTimer() {

    var d = new Date();
    var b = d.getMonth;

    const weekdays = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    document.getElementById("date").innerHTML = weekdays[d.getDay()] + "-" + d.getDate() + '-' + monthNames[d.getMonth()] + '-' + d.getFullYear();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();

}