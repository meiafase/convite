// src/animations/scrollAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function setupScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // --- SEÇÃO 1 ---
    gsap.fromTo(
        '.sectionOne .container-title',
        { scale: 1, opacity: 1 },
        {
            scale: 1,
            opacity: 0,
            y: '200%',
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.sectionOne',
                start: 'top top',
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        '.sectionOne .arrow',
        { scale: 1, opacity: 1, rotate: "46deg" },
        {
            scale: 1,
            opacity: 0,
            y: '200%',
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.sectionOne',
                start: 'top top',
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        '.sectionOne .corner-mid-left',
        { scale: 1, opacity: 1 },
        {
            scale: 1,
            opacity: 0,
            y: '200%',
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.sectionOne',
                start: 'top top',
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        '.sectionOne .corner-mid-right',
        { scale: 1, opacity: 1 },
        {
            scale: 1,
            opacity: 0,
            y: '200%',
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.sectionOne',
                start: 'top top',
                scrub: true,
            },
        }
    );
    

    gsap.fromTo(
        '.sectionOne .arrow-shadow',
        { scale: 1, opacity: 1 },
        {
            scale: 1,
            opacity: 0,
            y: '200%',
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.sectionOne',
                start: 'top top',
                scrub: true,
            },
        }
    );

    // --- SEÇÃO 2 ---
    gsap.fromTo(
        '.sectionTwo .container-img',
        { x: -500, scale: 0.8 },
        {
            scale: 1,
            x: 0,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.sectionTwo',
                start: 'top bottom',
                end: 'top top',
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        '.sectionTwo .textSectionTwo',
        { x: 500, scale: 0.8 },
        {
            scale: 1,
            x: 0,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.sectionTwo',
                start: 'top bottom',
                end: 'top top',
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        '.content',
        { xPercent: 0 },
        {
            xPercent: -200, // 3 imagens => -200 (move duas telas pra esquerda)
            ease: 'none',
            scrollTrigger: {
                trigger: '.s-hero',
                start: 'top top',
                end: '+=2000', // controla o quanto o scroll vai durar
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            },
        }
    );

}
