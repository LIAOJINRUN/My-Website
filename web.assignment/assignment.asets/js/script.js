<script>
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                // Close mobile menu
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Dark Mode Toggle
        const themeToggle = document.getElementById('themeToggle');
        const moonIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                moonIcon.classList.remove('fa-moon');
                moonIcon.classList.add('fa-sun');
                themeToggle.title = "Toggle Light Mode";
            } else {
                moonIcon.classList.remove('fa-sun');
                moonIcon.classList.add('fa-moon');
                themeToggle.title = "Toggle Dark Mode";
            }
        });
        
        // Contact Form Submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real application, this would send form data to a server
            // Here it's just a demo to show a success message
            alert('Message sent successfully! I will get back to you soon.');
            contactForm.reset();
        });
        
        // Skill Progress Bar Animation
        window.addEventListener('load', () => {
            const progressValues = document.querySelectorAll('.progress-value');
            
            progressValues.forEach(value => {
                const width = value.style.width;
                value.style.width = '0';
                
                setTimeout(() => {
                    value.style.width = width;
                }, 300);
            });
        });
    </script>