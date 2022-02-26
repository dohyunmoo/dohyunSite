<template>
    <div class="main">
        <div class="title">My Work</div>
        <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enter" class="project-row" id="blocker">
            <div v-for="(a,i) in Data" :key="i" :data-index="i" target="blank">
                <div class="project" v-if="i <= 3" :class="{'left-most': i == 0, 'top': true}">
                    <a v-if="a.link != ''" :href="a.link">
                        <div>
                            <h4>{{ a.title }}</h4>
                            <p>{{ a.description }}</p>
                        </div>
                    </a>
                    <div v-else>
                        <h4>{{ a.title }} - <span>{{ a.relation }}</span></h4>
                        <p>{{ a.description }}</p>
                    </div>
                </div>
            </div>
        </transition-group>
        <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enter" class="project-row">
            <div v-for="(a,i) in Data" :key="i" :data-index="i">
                <div class="project" v-if="i > 3" :class="{'left-most': i == 4, 'bottom': true}">
                    <a v-if="a.link != ''" :href="a.link" target="blank">
                        <h4>{{ a.title }}</h4>
                        <p>{{ a.description }}</p>
                    </a>
                    <div v-else>
                        <h4>{{ a.title }} @ <span>{{ a.relation }}</span></h4>
                        <p>{{ a.description }}</p>
                    </div>
                </div>
            </div>
        </transition-group>     
    </div>
</template>

<script>

import Data from '../assets/Data.js'
import gsap from 'gsap'

export default {
    setup() {
        const beforeEnter = (element) => {
            element.style.transform = 'translateX(-100px)'
            element.style.opacity = 0
        }
        const enter = (element, done) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: '#blocker',
                    start: 'center 60%',
                },
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                onComplete: done,
                delay: element.dataset.index*0.25
            })
        }
        return { beforeEnter, enter}
    },
    name: 'my-projects',
    props: [''],
    data() {
        return {
            Data,
        }
    }
}
</script>

<style scoped>
.main {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.project-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* background: #2c3e50; */
    width: 60%;
    /* margin: 5px; */
}

.project {
    /* background-color: rgb(255,255,255); */
    width: 24vw;
    height: 30vh;
    /* margin: 5px; */
    border-left: 5px #fcae1e;
    /* border-right: 5px #fcae1e; */
    border-left-style: inset;
    /* border-right-style: inset; */
}

.project div {
    height: 100%;
}

.left-most {
    border: none;
}

.top {
    border-bottom: 5px #fcae1e;
    border-bottom-style: inset;
}

.project p {
    text-align: left;
    font-size: 24px;
    font-weight: 100;
    padding: 15px;
}

.project h4 {
    text-align: center;
    padding: 10px;
}

.project span {
    background-color: #2c3e50;
    color: #ed7117;
}

.title {
    font-size: 64px;
    top: 0;
    left: 0;
    margin-bottom: 5vh;
    opacity: 0.4;
    font-weight: bolder;
}
</style>
