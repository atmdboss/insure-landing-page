{
	const menuIcon = document.getElementById("hamburger");
	const ul = document.querySelector(".nav-list");
	menuIcon.addEventListener("click", toggleMenu);
	function toggleMenu(evt) {
		if (menuIcon.src.includes("hamburger")) {
			menuIcon.src = "/images/icon-close.svg";
		} else {
			menuIcon.src = "/images/icon-hamburger.svg";
		}
		ul.classList.toggle("show");
	}
}
