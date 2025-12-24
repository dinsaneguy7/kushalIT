// --- 1. INITIALIZE LENIS (SMOOTH SCROLL) ---
// This gives the website that "heavy", premium feel
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// --- 2. CORE VARIABLES ---
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');
const magneticElements = document.querySelectorAll('.magnetic');
const magneticAreas = document.querySelectorAll('.magnetic-area');
const revealElements = document.querySelectorAll('.reveal-text');

let mouse = { x: 0, y: 0 };
let cursor = { x: 0, y: 0 };

// --- 3. CUSTOM CURSOR & PHYSICS ---
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    // Immediate update for dot
    cursorDot.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`;
});

const animateCursor = () => {
    // Smooth lerp for outline
    const dt = 0.15;
    cursor.x += (mouse.x - cursor.x) * dt;
    cursor.y += (mouse.y - cursor.y) * dt;
    
    cursorOutline.style.transform = `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)`;
    
    requestAnimationFrame(animateCursor);
};
animateCursor();

// --- 4. MAGNETIC EFFECT ON BUTTONS ---
magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        cursorOutline.style.borderColor = 'transparent';
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0px, 0px)';
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.backgroundColor = 'transparent';
        cursorOutline.style.borderColor = 'rgba(255,255,255,0.3)';
    });
});

// --- 5. MAGNETIC AREA (BADGE) ---
magneticAreas.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        el.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
    });
});

// --- 6. INTERSECTION OBSERVER (REVEAL ANIMATION) ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));

// --- 7. HOVER REVEAL EFFECT ---
const serviceRows = document.querySelectorAll('.service-row');
const revealContainer = document.getElementById('hover-reveal');
const revealImg = document.getElementById('reveal-img');

serviceRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        const imgUrl = row.getAttribute('data-img');
        const serviceTitle = row.querySelector('.service-title').textContent;
        revealImg.src = imgUrl;
        revealImg.alt = `${serviceTitle} service preview for Kushal IT`;
        revealContainer.classList.add('active');
        cursorOutline.style.width = '0px';
        cursorOutline.style.height = '0px';
        cursorDot.style.opacity = '0';
    });

    row.addEventListener('mousemove', (e) => {
        // Position the preview relative to cursor
        const x = e.clientX;
        const y = e.clientY;
        
        // Animate transform directly for performance
        revealContainer.animate({
            transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(-5deg)`
        }, { duration: 800, fill: "forwards" });
    });

    row.addEventListener('mouseleave', () => {
        revealContainer.classList.remove('active');
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorDot.style.opacity = '1';
        
        // Reset rotation
        revealContainer.animate({
             transform: `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%) rotate(0deg)`
        }, { duration: 500, fill: "forwards" });
    });
});

// --- 8. MENU TOGGLE ---
const menuBtn = document.getElementById('menu-toggle');
const menuOverlay = document.getElementById('menu-overlay');
const menuLinks = document.querySelectorAll('.menu-link');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        menuOverlay.classList.add('open');
        menuBtn.innerHTML = '<span>[ CLOSE ]</span>';
    } else {
        menuOverlay.classList.remove('open');
        menuBtn.innerHTML = '<span>[ MENU ]</span>';
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        menuOverlay.classList.remove('open');
        menuBtn.innerHTML = '<span>[ MENU ]</span>';
    });
});

// --- 9. PARALLAX EFFECT (Integrated with Lenis) ---
lenis.on('scroll', (e) => {
    // Parallax Badge
    const badge = document.querySelector('.badge-container');
    if(badge) badge.style.transform = `translateY(${e.scroll * 0.2}px)`;
    
    // Parallax Hero Text
    const heroH1 = document.querySelector('.hero h1');
    if(heroH1) heroH1.style.transform = `translateY(${e.scroll * 0.1}px)`;
});
