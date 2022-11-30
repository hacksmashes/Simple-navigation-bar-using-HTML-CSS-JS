let bgc = document.querySelector(".bgc");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");

function moveToElement(e) {
  if (e.innerHTML === "Home") {
    bgc.classList.add("home");
    bgc.classList.remove("about");
    bgc.classList.remove("event");
    bgc.classList.remove("contact");
    bgc.classList.remove("faq");

    setTimeout(() => {
      one.classList.add("active");
      two.classList.remove("active");
      three.classList.remove("active");
      four.classList.remove("active");
      five.classList.remove("active");
    }, 100);
  }
  
  else if (e.innerHTML === "About") {
    bgc.classList.remove("home");
    bgc.classList.add("about");
    bgc.classList.remove("event");
    bgc.classList.remove("contact");
    bgc.classList.remove("faq");

    setTimeout(() => {
      one.classList.remove("active");
      two.classList.add("active");
      three.classList.remove("active");
      four.classList.remove("active");
      five.classList.remove("active");
    }, 100);
  } 
  
  else if (e.innerHTML === "Event") {
    bgc.classList.remove("home");
    bgc.classList.remove("about");
    bgc.classList.add("event");
    bgc.classList.remove("contact");
    bgc.classList.remove("faq");

    setTimeout(() => {
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.add("active");
      four.classList.remove("active");
      five.classList.remove("active");
    }, 100);
  } 
  
  else if (e.innerHTML === "Contact") {
    bgc.classList.remove("home");
    bgc.classList.remove("about");
    bgc.classList.remove("event");
    bgc.classList.add("contact");
    bgc.classList.remove("faq");

    setTimeout(() => {
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
      four.classList.add("active");
      five.classList.remove("active");
    }, 100);
  } 
  
  else if (e.innerHTML === "FAQ") {
    bgc.classList.remove("home");
    bgc.classList.remove("about");
    bgc.classList.remove("event");
    bgc.classList.remove("contact");
    bgc.classList.add("faq");

    setTimeout(() => {
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
      four.classList.remove("active");
      five.classList.add("active");
    }, 100);
  }
}
