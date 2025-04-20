document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Modal functionality
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const modalImage = document.querySelector('.modal-image img');
    const modalTitle = document.querySelector('.modal-title');
    const apartmentName = document.querySelector('.apartment-name');
    const apartmentSize = document.querySelector('.apartment-size');
    const apartmentPrice = document.querySelector('.apartment-price');
    const featuresList = document.querySelector('.features-list');

    // Function to open modal
    function openModal(apartment) {
        modalImage.src = apartment.image;
        modalTitle.textContent = apartment.name;
        apartmentName.textContent = apartment.name;
        apartmentSize.textContent = apartment.size;
        apartmentPrice.textContent = apartment.price;
        
        // Clear existing features
        featuresList.innerHTML = '';
        
        // Add new features
        apartment.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');
    }

    // Function to close modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    // Close modal when clicking the close button
    modalClose.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Add click event to all "View Details" buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.apartment-card');
            const apartment = {
                image: card.querySelector('img').src,
                name: card.querySelector('h3').textContent,
                size: card.querySelector('p').textContent,
                price: card.querySelector('.price').textContent,
                features: [
                    'Air conditioning',
                    'Free WiFi',
                    'Kitchen',
                    'Private bathroom',
                    'Balcony',
                    'Sea view',
                    'TV',
                    'Parking'
                ]
            };
            openModal(apartment);
        });
    });
}); 