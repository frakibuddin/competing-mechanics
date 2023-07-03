// onscroll animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.15)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      //hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// blur loading
const blurDiv = document.querySelectorAll(".blur-load");

blurDiv.forEach((div) => {
  const img = div.querySelector("img");

  function loaded() {
    //show
    div.classList.add("loaded");
  }

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});

// pop up functionality id=""
const viewBtns = document.querySelectorAll("#view-btn");
const popUp = document.querySelector(".view-popup");
const popUpClouse = document.querySelector(".popup-clouse");

//open popup
viewBtns.forEach((viewBtn) => {
  viewBtn.onclick = (e) => {
    e.preventDefault();
    popUp.classList.add("active");
  };
});

//close popup
popUpClouse.onclick = () => {
  popUp.classList.remove("active");
};
