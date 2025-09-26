---
layout: ../../layouts/ProjectLayout.astro
title: Wind16 Macropad
description: Custom 16-key mechanical keyboard build - A compact, programmable input device for enhanced productivity
date: '2024-03-20'
tags: ['keyboard', 'electronics', 'DIY']
---

<div class="carousel">
    <div class="carousel-content">
        <img src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80' alt="Tech setup with keyboard"> 
        <img src='https://images.unsplash.com/photo-1625315714730-d0830772f564?w=800&q=80' alt="Mechanical keyboard close-up">
        <img src='https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=800&q=80' alt="Custom keyboard build">
    </div>
    <button class="carousel-btn prev" aria-label="Previous image">←</button>
    <button class="carousel-btn next" aria-label="Next image">→</button>
    <div class="carousel-dots"></div>
</div>

## Overview
A custom 16-key mechanical keyboard designed for productivity shortcuts and media controls.

## Features
- 16 programmable keys
- QMK firmware compatible
- Hot-swappable switches
- RGB underglow
- 3D printed case

## Build Process
1. PCB Assembly
     - Soldered components
     - Installed hot-swap sockets
     
2. Case Assembly
     - 3D printed case design
     - Assembly and hardware installation

3. Programming
     - QMK firmware configuration
     - Custom keymap setup

## Parts List
- Controller: ATmega32U4
- Switches: Gateron Browns
- Keycaps: DSA Profile
- Case: 3D printed PLA
- PCB: Custom design

## Future Improvements
- Add OLED display
- Design aluminum case
- Implement layers functionality

<style>
.carousel {
    overflow: hidden;
    width: 100%;
    position: relative;
    border-radius: 8px;
    margin: 2rem 0;
}

.carousel-content {
    display: flex;
    transition: transform 0.3s ease-in-out;
}

.carousel-content img {
    width: 100%;
    flex-shrink: 0;
    object-fit: cover;
    aspect-ratio: 16/9;
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    padding: 16px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 4px;
    transition: background 0.2s;
}

.carousel-btn:hover {
    background: rgba(0, 0, 0, 0.8);
}

.carousel-btn.prev {
    left: 10px;
}

.carousel-btn.next {
    right: 10px;
}

@media (max-width: 768px) {
    .carousel-btn {
        padding: 12px;
        font-size: 16px;
    }
}
</style>

<script>
document.addEventListener('astro:page-load', () => {
    const carousel = document.querySelector('.carousel-content');
    const images = carousel.querySelectorAll('img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });
});
</script>