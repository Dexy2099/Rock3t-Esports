window.addEventListener("scroll",()=>{

document.querySelector("header").style.background=
window.scrollY>50
?
"#111"
:
"rgba(0,0,0,.5)";

});

particlesJS("particles-js", {
    particles: {
        number: {
            value: 90,
            density: {
                enable: true,
                value_area: 900
            }
        },
        color: {
            value: "#bfbfbf"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 170,
            color: "#6e6e6e",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            grab: {
                distance: 180,
                line_linked: {
                    opacity: 0.8
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {

    const rect = hero.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;

});