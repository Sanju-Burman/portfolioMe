import { useEffect, useRef } from 'react';

/**
 * A custom hook to reveal elements on scroll using Intersection Observer.
 * @param {string} direction - 'left', 'right', 'up', 'bottom', or 'fade'. Default is 'up'.
 * @param {number} delay - Delay in ms before the animation starts. Default is 0.
 * @param {number} threshold - Threshold for intersection observer (0 to 1). Default is 0.1.
 * @returns {React.RefObject} - Ref to attach to the element you want to animate.
 */
export const useScrollReveal = (direction = 'up', delay = 0, threshold = 0.1) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Add base class and direction class
        element.classList.add('scroll-reveal');
        element.classList.add(`reveal-${direction}`);
        
        if (delay > 0) {
            element.style.transitionDelay = `${delay}ms`;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('active');
                    // Optional: Unobserve after revealing to animate only once
                    // observer.unobserve(element);
                } else {
                    // Remove active class to allow re-animation when scrolling back up
                    element.classList.remove('active');
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before it comes into full view
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [direction, delay, threshold]);

    return ref;
};
