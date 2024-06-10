<template>
    <div class="main">
        <div class="about">
            <h4>About Me</h4>
            <ul class="about-texts">
                <li>University of Waterloo B.A.Sc Computer Engineering 2024</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="skills">
            <div class="content">
                <h6>Main Programming Languages</h6>
                <p>Python. C/C++, HTML, CSS, Javascript, Java</p>
            </div>
            <div class="content">
                <h6>Tech Stack</h6>
                <p>Git, Linux CLI, Jenkins, Docker</p>
            </div>
        </div>
    </div>
</template>

<script>

import gsap from 'gsap'

export default {
    mounted() {
        this.scrollAnimation()
    },
    name: 'about-me',
    props: [''],
    data() {
        return {
            on: false,
        }
    },
    methods: {
        scrollAnimation() {
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.skills',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            })
            .from('.skills', {opacity: 0})
            .to('.skills', {opacity: 0})
        },
    },
}
</script>

<style scoped src="../assets/css/about.css"></style>
