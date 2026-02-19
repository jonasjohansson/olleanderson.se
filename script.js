// Display date ranges on resume items
document.querySelectorAll("[data-date-start]").forEach(function (el) {
	var start = el.getAttribute("data-date-start");
	var end = el.getAttribute("data-date-end");
	if (start && end) {
		el.style.setProperty("--date", '"' + start + "–" + end + '"');
	}
});

// Wrap gallery images in links and add captions
document.querySelectorAll("#work figure img").forEach(function (img) {
	var a = document.createElement("a");
	a.href = img.src;
	a.target = "_blank";
	img.parentNode.insertBefore(a, img);
	a.appendChild(img);

	var title = img.alt;
	if (!title) {
		var filename = decodeURIComponent(img.src.split("/").pop().replace(/\.\w+$/, ""));
		title = filename
			.replace(/^(?:bengtjohansson|bengt_johansson_-_|annaelisanilson|fredrikjohansson|olleanderson)-?/, "")
			.replace(/[-_]/g, " ")
			.trim();
		if (title) {
			title = title.charAt(0).toUpperCase() + title.slice(1);
			img.alt = title;
		}
	}

	if (title) {
		var caption = document.createElement("figcaption");
		caption.textContent = title;
		a.parentNode.appendChild(caption);
	}
});
