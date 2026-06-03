const DATA = {
  gar: ["Ankara", "Eskişehir", "Konya", "İstanbul"],
  baskentray: ["06:00", "06:30", "07:00", "07:30"],
  marmaray: ["05:10", "05:20", "05:30", "05:40"],
  m11: ["06:00", "06:15", "06:30", "06:45"]
};

// PANEL SİSTEMİ
function showPanel(id) {
  document.querySelectorAll('.page')
    .forEach(p => p.classList.remove('active'));

  document.getElementById(id).classList.add('active');

  if (id === "gar") renderGar();
  if (id === "baskentray") render("baskentrayList", DATA.baskentray);
  if (id === "marmaray") render("marmarayList", DATA.marmaray);
  if (id === "m11") render("m11List", DATA.m11);
}

// GAR
function renderGar() {
  const el = document.getElementById("garList");
  el.innerHTML = "";
  DATA.gar.forEach(g => {
    el.innerHTML += `<div class="card">${g}</div>`;
  });
}

// GENERIC RENDER
function render(id, arr) {
  const el = document.getElementById(id);
  el.innerHTML = "";
  arr.forEach(x => {
    el.innerHTML += `<div class="card">${x}</div>`;
  });
}

// ABONMAN
function calcAbonman() {
  document.getElementById("abonmanResult").innerText =
    "Örnek ücret: 120 TL";
}

// YAŞ
function calcAge() {
  const b = new Date(document.getElementById("birth").value);
  const now = new Date();
  let age = now.getFullYear() - b.getFullYear();
  document.getElementById("ageResult").innerText = age;
}
