<template>
    <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enter" class="main">
        <div v-for="(a,i) in Specs" :key="i" :data-index="i" :class="[a.id%2 == 1 ? 'experience-left': 'experience-right']">
            <h4 v-text="a.title"></h4>
            <p v-text="a.content"></p>
        </div>
    </transition-group>
</template>

<script>

import gsap from 'gsap'
import Specs from '../assets/Specs.js'

export default {
    setup() {
        const beforeEnter = (element) => {
            element.style.transform = 'translateX(-100px)'
            element.style.opacity = 0
        }

        const enter = (element, done) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: '.content',
                    start: 'bottom top',
                },
                x: 0,
                opacity: 1,
                duration: 1,
                onComplete: done,
                delay: element.dataset.index*0.7,
            })
        }
        return { beforeEnter, enter }
    },
    name: 'my-specs',
    props: [''],
    data() {
        return {
            Specs,
        }
    },
}
</script>

<style scoped>
.main {
    height: 150vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.experience-left,
.experience-right {
    width: 70%;
    margin-top: 5vh;
    margin-bottom: 5vh;
    background-color: rgba(255,255,255,0.05);
    min-height: 100px;
    height: 30vh;
    overflow: hidden;
}

.experience-left p,
.experience-right p {
    text-align: left;
    font-size: 24px;
    font-weight: 100;
    padding: 15px;
}

.experience-left h4,
.experience-right h4 {
    text-align: center;
    padding: 10px;
    font-style: oblique 50deg;
    font-weight: bold;
    font-size: 36px;
}

.experience-left {
    margin-left: -50vh;
}

.experience-right {
    margin-right: -50vh;
}

@media (max-width: 500px) {
    .main {
        display: flex;
        flex-direction: column;
        height: 100vh;
        align-items: center;
        justify-content: center;
        text-align: left;
    }

    .experience-left,
    .experience-right {
        margin: 1%;
        width: 95%;
    }

    .experience-left h4,
    .experience-right h4 {
        font-size: 28px;
    }

    .experience-left p,
    .experience-right p {
        font-size: 18px;
    }
}
</style>