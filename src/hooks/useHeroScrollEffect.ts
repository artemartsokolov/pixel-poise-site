import { useEffect } from 'react';

export const useHeroScrollEffect = () => {
    useEffect(() => {
        let rafId: number;

        const updateOpacity = () => {
            const heroOverlay = document.getElementById('hero-overlay');
            if (!heroOverlay) return;

            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate opacity based on scroll (0 to 0.7 max)
            const opacity = Math.min((scrollY / windowHeight) * 0.7, 0.7);

            // Opacity on a promoted layer: cheap enough here, and the overlay has no transform to share
            heroOverlay.style.setProperty('opacity', opacity.toString());
        };

        const handleScroll = () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
            rafId = requestAnimationFrame(updateOpacity);
        };

        // Initial call
        updateOpacity();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, []);
};
