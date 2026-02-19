// Display date ranges on resume items
document.querySelectorAll("[data-date-start]").forEach(function (el) {
	var start = el.getAttribute("data-date-start");
	var end = el.getAttribute("data-date-end");
	if (start && end) {
		el.style.setProperty("--date", '"' + start + "–" + end + '"');
	}
});

// Wrap gallery images in links that open the full image
document.querySelectorAll("#work figure img").forEach(function (img) {
	var a = document.createElement("a");
	a.href = img.src;
	a.target = "_blank";
	img.parentNode.insertBefore(a, img);
	a.appendChild(img);
});
