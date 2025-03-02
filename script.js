document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".box").forEach(box => {
        gsap.fromTo(box, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1, ease: "power2.out",
              scrollTrigger: {
                  trigger: box,
                  start: "top 80%", 
                  toggleActions: "play none none none"
              }
            }
        );
    });
});
