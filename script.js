document.addEventListener('DOMContentLoaded', () => {
    // Modal elements
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const modalImage = document.querySelector('.modal-image img');
    const modalTitle = document.querySelector('.modal-title');
    const apartmentName = document.querySelector('.apartment-name');
    const apartmentSize = document.querySelector('.apartment-size');
    const featuresList = document.querySelector('.features-list');

    // View details buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    // Open modal function
    function openModal(apartment) {
        modalImage.src = apartment.image;
        modalImage.alt = apartment.name;
        modalTitle.textContent = apartment.name;
        apartmentName.textContent = apartment.name;
        apartmentSize.textContent = `${apartment.description} | ${apartment.size} | ${apartment.beds}`;

        // Clear existing features
        featuresList.innerHTML = '';

        // Add new features
        apartment.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // Show modal
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');
    }

    // Close modal function
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    // Add click event to view details buttons
    viewDetailsButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            openModal(apartments[index]);
        });
    });

    // Close modal when clicking close button or overlay
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}); 