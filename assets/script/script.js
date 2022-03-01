const menu = document.querySelector(".menu-list");
const body = document.querySelector("body");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navBtn = document.querySelector(".menu-list li a");
// const scrol = document.querySelector(".home");
const txt = document.querySelector(".text-wrapper");
const cta2 = document.querySelector(".cta2 button");

menuBtn.onclick = ()=>{
	menu.classList.add("active");
	menuBtn.classList.add("hide");
	body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
	menu.classList.remove("active");
	menuBtn.classList.remove("hide");
	body.classList.remove("disabledScroll");
}
window.onscroll = () => {
	this.scrollY > 20 ? header.classList.add("sticky") : header.classList.remove("sticky");
	// c = (1- (this.scrollY/(3000+Math.abs(3000-this.scrollY))));
	
	// if(this.scrollY >2500){
		// console.log(c);
		// txt.style.opacity = c;
	// }
	// else{
		// txt.style.opacity = 1;
	// }
	if(this.scrollY >454){
		c = -(this.scrollY - 454);
		cc = 'translateY(' + c + 'px)'
		txt.style.transform = cc;
		cta2.style.transform = cc;
	}
}
const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max((rawPercentScrolled*1.1), 0), 1);
			
			video.currentTime = video.duration * percentScrolled;
			
		}
		window.requestAnimationFrame(scrollVideo);
		
	}
	window.requestAnimationFrame(scrollVideo);
}

registerVideo("#bound-two", "#bound-two video")

(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();




