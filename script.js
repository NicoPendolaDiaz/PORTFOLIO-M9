// script.js
// Implementado bajo estándares corporativos usando jQuery ES6+

$(document).ready(function() {
    console.log("Enterprise Protocol: UI Loaded Successfully.");

    // Smooth scroll for navigation links using jQuery
    $('.navbar-nav a, .navbar-brand').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;

            // Adding neon glow effect to active link
            $('.nav-link').removeClass('neon-text').css('text-shadow', '');
            $(this).addClass('neon-text');

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80 // Offset for the fixed headers
            }, 800, 'swing');
            
            // Close mobile menu if open
            if ($('.navbar-collapse').hasClass('show')) {
                $('.navbar-toggler').click();
            }
        }
    });

    // Intersection Observer for scroll reveal animations (More performant than scroll bound events)
    const revealElements = document.querySelectorAll('.reveal-item');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // jQuery animation for reveal
                    $(entry.target).stop().animate({
                        opacity: 1,
                        marginTop: '0px'
                    }, 800, 'swing');
                    // Unobserve after revealing for better performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => {
            $(el).css({
                opacity: 0,
                marginTop: '30px'
            });
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers
        $('.reveal-item').css({ opacity: 1, marginTop: '0px' });
    }

    // Magnetic Effect for Navigation Links (Efecto Imán UX)
    $('.nav-link').each(function() {
        // Enforce inline-block via a special class for transforms to apply properly
        $(this).addClass('magnetic-item');

        $(this).on('mousemove', function(e) {
            const position = this.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            
            $(this).addClass('active-magnet');
            // Move the button slightly towards the cursor (0.3 intensity/friction)
            $(this).css('transform', `translate(${x * 0.3}px, ${y * 0.3}px)`);
        });

        $(this).on('mouseleave', function() {
            $(this).removeClass('active-magnet');
            // Return to rest position softly
            $(this).css('transform', 'translate(0px, 0px)');
        });
    });
});
