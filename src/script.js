function format(inputString) {
  return inputString
    .replace(/^0/g, "")
    .replace(/,/g, ".")
    .replace(/^\.($|[^0-9])/, "0.")
    .replace(/\.{2,}/g, ".")
    .replace(/(.*?\..*?)\./g, "$1")
    .replace(/(\d+\.\d{2})\d*/g, "$1")
    .replace(/[a-zA-Z]+/g, "");
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
  herbicydy: [
    "doglebowo",
    "przedwschodowo",
    "powschodowo - kontaktowe",
    "powschodowo - systemiczne",
    "glifosat przed zbiorem",
  ],
  fungicydy: [
    "kontaktowe",
    "systemiczne",
    "niskie rośliny",
    "wysokie rośliny",
    "na kłos i górne liście",
  ],
  zoocydy: [
    "kontaktowe",
    "systemiczne",
    "gazowe",
    "niskie rośliny",
    "wysokie rośliny",
    "na kłos i górne liście",
  ],
  nawozy: ["dolistne", "doglebowe"],
};

const rodzajSelect = document.getElementById("rodzaj-srodka");
const dzialanieSelect = document.getElementById("dzialanie-srodka");

rodzajSelect.addEventListener("change", function () {
  const selectedRodzaj = this.value;
  dzialanieSelect.innerHTML =
    "<option disabled selected hidden>wybierz działanie środka</option>";

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
