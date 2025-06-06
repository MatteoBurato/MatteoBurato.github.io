document.addEventListener('DOMContentLoaded', function() {

    // --- Page Navigation Logic ---
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetPage = this.dataset.page;

            // Update active state on pages
            pages.forEach(page => {
                if (page.id === targetPage) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });

            // Update active state on nav links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // --- tsParticles Initialization ---
    tsParticles.load("particles-js", {
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble" // Can be "grab", "bubble", "repulse"
                },
                onClick: {
                    enable: true, // Set to true to enable click events
                    mode: "push"
                }
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 10,
                    duration: 2,
                    opacity: 0.8
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        particles: {
            number: {
                value: 80, // Number of particles
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#cccccc" // Particle color
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3, // Particle size
                random: true
            },
            links: {
                enable: true,
                distance: 150,
                color: "#cccccc", // Line color
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2, // Particle movement speed
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        detectRetina: true
    });
});