const heroSection = document.querySelector('.hero-section');
const navbar = document.querySelector('.navbar');
const content = document.querySelector('.content');

await setElementStyles(heroSection, {
    zIndex: '3',
});
await setElementStyles(navbar, {
    pointerEvents: 'none',
});
await setElementStyles(content, {
    pointerEvents: 'none',
});

heroSection.addEventListener('click', () => {
    console.log('hero-section clicked!');
    alert('hero-section clicked!');
});
const data = {
    heroSection: {
        zIndex: window.getComputedStyle(heroSection)['z-index'],
        pointerEvents: window.getComputedStyle(heroSection)['pointer-events'],
    },
    navbar: {
        zIndex: window.getComputedStyle(navbar)['z-index'],
        pointerEvents: window.getComputedStyle(navbar)['pointer-events'],
    },
    content: {
        zIndex: window.getComputedStyle(content)['z-index'],
        pointerEvents: window.getComputedStyle(content)['pointer-events'],
    },
};
