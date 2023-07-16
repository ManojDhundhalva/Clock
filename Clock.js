let widthofWindow = window.innerWidth;
let heightofWindow = window.innerHeight;
let mycvs = document.getElementById("myCanvas");

// mycvs.style.marginLeft = widthofWindow / 2 - 250 + "px";
// mycvs.style.marginTop = heightofWindow / 2 - 300 + "px";

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.moveTo(250, 250);
let intervalAdd = setInterval(secondTime, 1000);

const rad = (Math.PI / 180);
const mmin = 1 / 10;
const hhr = 1 / 120;

let date = new Date();
let hhours = date.getHours();
let hmin = date.getMinutes();
let hsec = date.getSeconds();


let i = -90 + (hsec * 6);
let imin = -90 + ((hmin + (hsec / 60)) * 6);
let ihr = -90 + (((hhours + (hmin / 60)) % 12) * 30);

console.log(hhours);
console.log(hmin);
console.log(hsec);

let HourString = '';
let MinuteString = '';
let SecondString = '';

function secondTime() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    i = ((i + 6) % 360);
    imin = ((imin + mmin) % 360);
    ihr = ((ihr + hhr) % 360);

    context.beginPath();
    // context.shadowColor = "black";
    // context.shadowBlur = 2;
    // context.shadowOffsetX = 2;
    // context.shadowOffsetY = 2;

    context.lineWidth = 3;
    context.fillStyle = "transparent";
    context.arc(250, 250, 246, 0, 2 * Math.PI);
    context.fill();

    // context.moveTo(250, 250);
    context.lineCap = "round";

    context.beginPath();
    context.lineWidth = 3;
    context.fillStyle = "transparent";// "#127369";
    context.arc(250, 250, 238, 0, 2 * Math.PI);
    context.fill();
    // context.strokeStyle = "#127369";//"gray";
    // context.stroke();


    context.beginPath();
    context.moveTo(250, 250);
    context.lineWidth = 10;
    context.strokeStyle = "#015958"; //"#023535";//"rgb(54,56,89)";
    context.lineTo(250 + (84 * Math.cos(rad * ihr)), 250 + (84 * Math.sin(rad * ihr)));
    context.moveTo(250, 250);
    context.lineTo(250 + (40 * Math.cos(rad * (ihr + 180))), 250 + (40 * Math.sin(rad * (ihr + 180))));
    context.stroke();

    context.beginPath();
    context.moveTo(250, 250);
    context.lineWidth = 6;
    context.strokeStyle = "#008F8C" //"#015958";//"rgb(72,86,115)";
    context.lineTo(250 + (145 * Math.cos(rad * imin)), 250 + (145 * Math.sin(rad * imin)));
    context.moveTo(250, 250);
    context.lineTo(250 + (60 * Math.cos(rad * (imin + 180))), 250 + (60 * Math.sin(rad * (imin + 180))));
    context.stroke();

    context.beginPath();
    context.moveTo(250, 250);
    context.lineWidth = 3;
    context.strokeStyle = "#0CABA8"; //"#008F8C";//"rgb(146, 160, 166)"
    context.lineTo(250 + (190 * Math.cos(rad * i)), 250 + (190 * Math.sin(rad * i)));
    context.moveTo(250, 250);
    context.lineTo(250 + (80 * Math.cos(rad * (i + 180))), 250 + (80 * Math.sin(rad * (i + 180))));
    context.stroke();

    context.beginPath();
    // context.moveTo(250, 250);
    // context.lineWidth = 4;
    // context.strokeStyle = "gray";
    context.fillStyle = "#0CABA8";//"#8AA6A3";//rgb(146, 160, 166)";
    context.arc(250, 250, 8, 0, 2 * Math.PI);
    context.fill();
    // context.stroke();

    context.beginPath();
    // context.moveTo(250, 250);
    // context.lineWidth = 4;
    // context.strokeStyle = "gray";
    context.fillStyle = "#e2ffff";
    context.arc(250, 250, 6, 0, 2 * Math.PI);
    context.fill();

    // context.font = "54px Quicksand";
    // context.fillStyle = "white";// "#127369";
    // context.fillText("12", canvas.width / 2 - (54 / 2), 54);
    // // context.strokeText("12", canvas.width / 2 - (54 / 2), 54);
    // context.fillText("6", canvas.width / 2 - (20 / 2), canvas.height - (24 / 2));
    // context.fillText("9", (20 / 2), canvas.height / 2 + (24 / 2));
    // context.fillText("3", canvas.width - (54 * 2) / 3 - 2, canvas.height / 2 + (24 / 2));

    for (let i = 0; i < 360; i += 30) {
        context.beginPath();
        if (i == 0 || i == 90 || i == 180 || i == 270) {
            context.strokeStyle = "#015958";
        }
        else {
            context.strokeStyle = "#0FC2C0";
        }
        context.moveTo(250 + 200 * Math.cos(rad * i), 250 + 200 * Math.sin(rad * i));
        context.lineTo(250 + 232 * Math.cos(rad * i), 250 + 232 * Math.sin(rad * i));
        context.stroke();
    }


    let date = new Date();
    let hhours = date.getHours();
    let hmin = date.getMinutes();
    let hsec = date.getSeconds();

    let amorpm = "AM";
    if (hhours > 12) {
        hhours %= 12;
        amorpm = "PM"
    }

    i = -90 + (hsec * 6);
    imin = -90 + ((hmin + (hsec / 60)) * 6);
    ihr = -90 + (((hhours + (hmin / 60)) % 12) * 30);

    HourString = roundTime(hhours);
    MinuteString = roundTime(hmin);
    SecondString = roundTime(hsec);

    function roundTime(time) {
        let ttime = String(time);
        if (ttime.length < 2) {
            ttime = "0" + ttime;
        }
        return ttime;
    }
    document.getElementById("clockTime").textContent = `${HourString}:${MinuteString}:${SecondString}  ${amorpm}`;
}
