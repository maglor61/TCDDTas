const stations = [
  "Ankara",
  "Eskişehir",
  "Konya",
  "İstanbul",
  "Söğütlüçeşme",
  "Pendik",
  "Gebze"
];

const lines = [
  "Marmaray",
  "Başkentray",
  "M11 Metro",
  "YHT Ankara-İstanbul"
];

// PAGE SYSTEM
function openTab(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (id === "stations") renderStations();
  if (id === "lines") renderLines();
}

// STATIONS
function renderStations() {
  const q = document.getElementById("search")?.value?.toLowerCase() || "";
  const list = document.getElementById("stationList");

  list.innerHTML = "";

  stations
    .filter(s => s.toLowerCase().includes(q))
    .forEach(s => {
      list.innerHTML += `<div class="card">🚉 ${s}</div>`;
    });
}

// LINES
function renderLines() {
  const list = document.getElementById("lineList");
  list.innerHTML = "";

  lines.forEach(l => {
    list.innerHTML += `<div class="card">🚄 ${l}</div>`;
  });
}

// ABONMAN
function calc() {
  const f = document.getElementById("from").value;
  const t = document.getElementById("to").value;

  document.getElementById("result").innerText =
    `${f} → ${t} : 120 TL (örnek)`;
}

// AGE
function age() {
  const b = new Date(document.getElementById("birth").value);
  const now = new Date();

  let a = now.getFullYear() - b.getFullYear();

  document.getElementById("ageResult").innerText = "Yaş: " + a;
}
