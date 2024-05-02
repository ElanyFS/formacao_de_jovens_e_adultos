function next() {
  let secao1 = document.getElementById("section1").classList.contains("hidden");
  let secao2 = document.getElementById("section2").classList.contains("hidden");
  let secao3 = document.getElementById("section3").classList.contains("hidden");
  let secao4 = document.getElementById("section4").classList.contains("hidden");
  if (secao1 == false) {
    document.getElementById("section1").classList.add("hidden");
    document.getElementById("section2").classList.remove("hidden");
  } else if (secao2 == false) {
    document.getElementById("section2").classList.add("hidden");
    document.getElementById("section3").classList.remove("hidden");
  } else if (secao3 == false) {
    document.getElementById("section3").classList.add("hidden");
    document.getElementById("section4").classList.remove("hidden");
  }
}

function prev() {
  let secao1 = document.getElementById("section1").classList.contains("hidden");
  let secao2 = document.getElementById("section2").classList.contains("hidden");
  let secao3 = document.getElementById("section3").classList.contains("hidden");
  let secao4 = document.getElementById("section4").classList.contains("hidden");

  if (secao2 == false) {
    document.getElementById("section1").classList.remove("hidden");
    document.getElementById("section2").classList.add("hidden");
  }else if(secao3 == false){
    document.getElementById("section2").classList.remove("hidden");
    document.getElementById("section3").classList.add("hidden");
  } else if(secao4 == false){
    document.getElementById("section3").classList.remove("hidden");
    document.getElementById("section4").classList.add("hidden");
  }
}
