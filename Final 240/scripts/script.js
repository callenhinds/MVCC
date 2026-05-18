/*
	Student Name: Cheyenne Allen-Hinds
	File Name: script.js
	Date: 4/29/26
*/

//Had to add a DOM load complete event listener
document.addEventListener("DOMContentLoaded", function() {

// Event Ticker
const events = [
    "Cosplay Contest",
	"Kids Cosplay Parade",
    "Artist Alley",
    "Comic Book Swap",
    "Guest Q&As",
    "Superhero Trivia",
    "Pokemon Card Tournament",
	"Anime Maid Cafe",
    "Photo Ops",
	"Autograph Signings",
    "Vendor Hall"
];

let eventIndex = 0;
const eventText = document.getElementById("eventText");

if (eventText) {
    setInterval(function() {
        eventText.style.opacity = 0;

        setTimeout(function() {
            eventIndex = (eventIndex + 1) % events.length;
            eventText.textContent = events[eventIndex];
            eventText.style.opacity = 1;
        }, 500);

    }, 2500);
}

// Get Tickets Button animation
const ticketBtn = document.getElementById("ticketBtn");

if (ticketBtn) {
    ticketBtn.addEventListener("mouseenter", function() {
        ticketBtn.style.transform = "scale(1.12) rotate(-2deg)";
        ticketBtn.style.boxShadow = "0 0 20px #ffcc00";
    });

    ticketBtn.addEventListener("mouseleave", function() {
        ticketBtn.style.transform = "scale(1) rotate(0deg)";
        ticketBtn.style.boxShadow = "none";
    });
}

// Guest Cards
const guestButtons = document.querySelectorAll(".guest-btn");
const guestInfo = document.getElementById("guestInfo");

if (guestInfo) {
    guestButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            guestInfo.textContent = button.getAttribute("data-info");
        });
    });
}

//End DOM Listener
});

// Hamburger menu Function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo= document.getElementById("mvcc-logo");
	if (menu.style.display === "block" &&logo.style.display == "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}	
}