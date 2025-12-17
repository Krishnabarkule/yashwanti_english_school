// ==========================================
// Navigation Active State
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
	// Get current page filename
	const currentPage = window.location.pathname.split("/").pop() || "index.html";

	// Update active nav link
	const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
	navLinks.forEach((link) => {
		const href = link.getAttribute("href");
		if (href === currentPage || (currentPage === "" && href === "index.html")) {
			link.classList.add("active");
		}
	});
});

// ==========================================
// Smooth Scrolling
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	});
});

// ==========================================
// Gallery Lightbox
// ==========================================
function initializeLightbox() {
	// Create lightbox element if it doesn't exist
	if (!document.getElementById("lightbox")) {
		const lightbox = document.createElement("div");
		lightbox.id = "lightbox";
		lightbox.className = "lightbox";
		lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <div class="lightbox-content">
                <img src="" alt="Lightbox Image">
            </div>
        `;
		document.body.appendChild(lightbox);
	}

	const lightbox = document.getElementById("lightbox");
	const lightboxImg = lightbox.querySelector("img");
	const closeBtn = lightbox.querySelector(".lightbox-close");

	// Add click event to all gallery items
	const galleryItems = document.querySelectorAll(".gallery-item");
	galleryItems.forEach((item) => {
		item.addEventListener("click", function () {
			const img = this.querySelector("img");
			lightboxImg.src = img.src;
			lightbox.classList.add("active");
			document.body.style.overflow = "hidden";
		});
	});

	// Close lightbox
	closeBtn.addEventListener("click", closeLightbox);
	lightbox.addEventListener("click", function (e) {
		if (e.target === lightbox) {
			closeLightbox();
		}
	});

	// Close on escape key
	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape" && lightbox.classList.contains("active")) {
			closeLightbox();
		}
	});

	function closeLightbox() {
		lightbox.classList.remove("active");
		document.body.style.overflow = "auto";
	}
}

// Initialize lightbox when DOM is loaded
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initializeLightbox);
} else {
	initializeLightbox();
}

// ==========================================
// Contact Form Validation
// ==========================================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
	contactForm.addEventListener("submit", function (e) {
		e.preventDefault();

		// Get form values
		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const subject = document.getElementById("subject").value;
		const message = document.getElementById("message").value;

		// Simple validation
		if (name && email && subject && message) {
			alert("Thank you for your message! We will get back to you soon.");
			contactForm.reset();
		} else {
			alert("Please fill in all fields.");
		}
	});
}

// ==========================================
// Scroll to Top Button
// ==========================================
function createScrollToTop() {
	const scrollBtn = document.createElement("button");
	scrollBtn.innerHTML = "↑";
	scrollBtn.className = "scroll-to-top";
	scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #3b82f6;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 24px;
        display: none;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    `;

	document.body.appendChild(scrollBtn);

	// Show/hide button
	window.addEventListener("scroll", function () {
		if (window.pageYOffset > 300) {
			scrollBtn.style.display = "block";
		} else {
			scrollBtn.style.display = "none";
		}
	});

	// Scroll to top
	scrollBtn.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	// Hover effect
	scrollBtn.addEventListener("mouseenter", function () {
		this.style.background = "#1e3a8a";
		this.style.transform = "translateY(-5px)";
	});

	scrollBtn.addEventListener("mouseleave", function () {
		this.style.background = "#3b82f6";
		this.style.transform = "translateY(0)";
	});
}

createScrollToTop();

// ==========================================
// Animation on Scroll
// ==========================================
function animateOnScroll() {
	const elements = document.querySelectorAll(
		".card, .stat-item, .faculty-card"
	);

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = "0";
					entry.target.style.transform = "translateY(20px)";

					setTimeout(() => {
						entry.target.style.transition = "all 0.6s ease";
						entry.target.style.opacity = "1";
						entry.target.style.transform = "translateY(0)";
					}, 100);

					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	elements.forEach((element) => {
		observer.observe(element);
	});
}

// Run animation on scroll
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", animateOnScroll);
} else {
	animateOnScroll();
}

// ==========================================
// Counter Animation for Stats
// ==========================================
function animateCounter(element, target, duration = 2000) {
	let current = 0;
	const increment = target / (duration / 16);

	const updateCounter = () => {
		current += increment;
		if (current < target) {
			element.textContent = Math.floor(current);
			requestAnimationFrame(updateCounter);
		} else {
			element.textContent = target;
		}
	};

	updateCounter();
}

// Animate stats when they come into view
const statNumbers = document.querySelectorAll(".stat-number");
if (statNumbers.length > 0) {
	const statsObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const target = parseInt(entry.target.textContent);
					entry.target.textContent = "0";
					animateCounter(entry.target, target);
					statsObserver.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.5,
		}
	);

	statNumbers.forEach((stat) => {
		statsObserver.observe(stat);
	});
}
