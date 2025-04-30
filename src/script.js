function format(inputString) {
  return inputString
    .replace(/[^0-9.,]/g, "")
    .replace(/^(?!\.)/g, "")
    .replace(/,/g, ".")
    .replace(/^\.($|[^0-9])/, "0.")
    .replace(/\.{2,}/g, ".")
    .replace(/(.*?\..*?)\./g, "$1")
    .replace(/(\d+\.\d{2})\d*/g, "$1");
}
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", (event) => {
    const inputField = event.target;
    inputField.value = format(inputField.value);
  });
});
const visitedElements = document.querySelectorAll("input, select");
visitedElements.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value) {
      this.classList.add("visited");
    } else {
      this.classList.remove("visited");
    }
  });
});
const dzialania = {
  herbicydy: ["doglebowo", "przedwschodowo", "powschodowo - kontaktowe", "powschodowo - systemiczne", "glifosat przed zbiorem"],
  fungicydy: ["kontaktowe", "systemiczne", "niskie rośliny", "wysokie rośliny", "na kłos i górne liście"],
  zoocydy: ["kontaktowe", "systemiczne", "gazowe", "niskie rośliny", "wysokie rośliny", "na kłos i górne liście"],
  nawozy: ["dolistne", "doglebowo"],
};

const rodzajSelect = document.querySelector("#rodzaj-srodka");
const dzialanieSelect = document.querySelector("#dzialanie-srodka");
const wiatrSelect = document.querySelector("#predkosc-wiatru");

rodzajSelect.addEventListener("change", function () {
  const selectedRodzaj = this.value;
  dzialanieSelect.innerHTML = "<option disabled selected hidden>wybierz działanie środka</option>";

  const firstOption = document.createElement("option");
  firstOption.value = "wybierz działanie środka";
  firstOption.textContent = "wybierz działanie środka";
  firstOption.disabled = true;
  firstOption.hidden = true;
  dzialanieSelect.appendChild(firstOption);

  if (dzialania[selectedRodzaj]) {
    dzialania[selectedRodzaj].forEach((d) => {
      const option = document.createElement("option");
      option.value = d;
      option.textContent = d;
      dzialanieSelect.appendChild(option);
    });
  }
});

function dropSize() {
  const dzialanieValue = dzialanieSelect.value;
  const wiatrValue = wiatrSelect.value;

  if (wiatrValue === "do1.5") {
    return dzialanieValue === "doglebowo" || dzialanieValue === "wysokie rośliny" ? "srednie" : "drobne";
  }
  if (wiatrValue === "do2.5") return "srednie";
  if (wiatrValue === "do5") {
    return dzialanieValue === "doglebowo" || dzialanieValue === "wysokie rośliny" || dzialanieValue === "powschodowo - systemiczne" || dzialanieValue === "glifosat przed zbiorem" || dzialanieValue === "niskie rośliny" ? "grube" : "srednie";
  }
  if (wiatrValue === "ponad5") {
    return dzialanieValue === "doglebowo" ? "bardzo grube" : "grube";
  }
}
const btn01 = document.querySelector("#btn01");
const btn015 = document.querySelector("#btn015");
const btn02 = document.querySelector("#btn02");
const btn025 = document.querySelector("#btn025");
const btn03 = document.querySelector("#btn03");
const btn04 = document.querySelector("#btn04");
const btn05 = document.querySelector("#btn05");
const btn06 = document.querySelector("#btn06");
const btn08 = document.querySelector("#btn08");
function exceptions(dropSize) {
  if (dropSize === "drobne") {
    btn03.classList.add("hidden");
    btn04.classList.add("hidden");
    btn05.classList.add("hidden");
    btn06.classList.add("hidden");
    btn08.classList.add("hidden");
  } else if (dropSize === "srednie") {
    btn03.classList.remove("hidden");
    btn04.classList.remove("hidden");
    btn05.classList.remove("hidden");
    btn06.classList.add("hidden");
    btn08.classList.add("hidden");
  } else {
    btn03.classList.remove("hidden");
    btn04.classList.remove("hidden");
    btn05.classList.remove("hidden");
    btn06.classList.remove("hidden");
    btn08.classList.remove("hidden");
  }
}

let text01 = document.querySelector("#text01").innerHTML;
let text015 = document.querySelector("#text015").textContent;
let text02 = document.querySelector("#text02").textContent;
let text025 = document.querySelector("#text025").textContent;
let text03 = document.querySelector("#text03").textContent;
let text04 = document.querySelector("#text04").textContent;
let text05 = document.querySelector("#text05").textContent;
let text06 = document.querySelector("#text06").textContent;
let text08 = document.querySelector("#text08").textContent;
function labels(dropSize) {
  if (dropSize === "drobne") {
  } else if (dropSize === "srednie") {
  } else if (dropSize === "grube") {
  } else if (dropSize === "bardzo grube") {
  }
}
function section2service() {
  exceptions(dropSize());
  labels(dropSize());
}
dzialanieSelect.addEventListener("change", section2service);
wiatrSelect.addEventListener("change", section2service);

const typeOfCalculation = document.querySelector(".calculation-option");
const cisnienieBtn = document.querySelector("#cisnienie");
const predkoscBtn = document.querySelector("#predkosc");
const dawkaCieczyBtn = document.querySelector("#dawka-cieczy");
const cisnienieInput = document.querySelector("#cisnienie-input");
const predkoscInput = document.querySelector("#predkosc-input");
const dawkaCieczyInput = document.querySelector("#dawka-cieczy-input");
function section3service() {}
typeOfCalculation.addEventListener("click", section3service);
