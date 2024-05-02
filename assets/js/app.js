let sections = [
  { id: "section1" },
  { id: "section2" },
  { id: "section3" },
  { id: "section4" },
];

function hiddenSectionVisible() {
  for (let i = 0; i < sections.length; i++) {
    if (!document.getElementById(sections[i].id).classList.contains("hidden")) {
      return i;
    }
  }
  return -1;
}

function navigate(forward) {
  let currentIndex = hiddenSectionVisible();

  if (currentIndex !== -1) {
    let nextIndex = forward ? currentIndex + 1 : currentIndex - 1;
    if (sections[nextIndex]) {
      document
        .getElementById(sections[currentIndex].id)
        .classList.add("hidden");
      document
        .getElementById(sections[nextIndex].id)
        .classList.remove("hidden");
    }
  }
}

function next() {
  navigate(true);
}

function prev() {
  navigate(false);
}

// Mascara CPF

var options = {
  onKeyPress: function (op) {
    var masks = ["000.000.000-00"];
    $("#cpf").mask(masks[0], op);
  },
};
$("#cpf").mask("000.000.000-00#", options);
