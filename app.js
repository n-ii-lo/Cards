const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
	slide.addEventListener("click", () => {
		clear();
		slide.classList.add("active");
	})	
}
function clear() {
	slides.forEach((slide) => {
		slide.classList.remove("active");
	})
};