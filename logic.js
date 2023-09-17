// burger
function myFunction() {
    var y = document.getElementById("nav-bar");
    if (y.className === "navbars") {
        y.className += " responsive";
    } else {
        y.className = "navbars";
    }

    var x = document.getElementById("navId");
    if (x.className === "nav-link") {
        x.className += " responsive";
    } else {
        x.className = "nav-link";
    }
}

// darkmode
const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', (e) => {
	const isChecked = e.target.checked;
	
	if(isChecked) {
		body.classList.add('dark-theme');
	} else {
		body.classList.remove('dark-theme');
	}
});