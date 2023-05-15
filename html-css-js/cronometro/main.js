const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const sencod = document.getElementById("second");
const day = document.getElementById("day");

var monthName = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "September",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

const clock = setInterval(() => {
  let today = new Date();
  let d = today.getDate();
  let m = today.getMonth();
  let y = today.getFullYear();
  let h = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  day.innerHTML = `${d} ${monthName[m]} ${y}`;
  hour.textContent = h;
  minute.innerText = min;
  sencod.innerText = sec;
});
