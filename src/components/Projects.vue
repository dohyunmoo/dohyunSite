<template>
    <div>
        <div v-show="!mobile" class="main">
            <div class="title">My Work</div>
            <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enter" class="project-row">
                <div v-for="(a,i) in Data" :key="i" :data-index="i">
                    <div class="project" v-if="i <= 3">
                        <a v-if="a.link != ''" :href="a.link">
                            <div :class="classArray[i]"></div>
                            <h4>{{ a.title }}</h4>
                            <p>{{ a.description }}</p>
                        </a>
                        <a v-else href="resume.pdf" target="_blank">
                            <div :class="classArray[i]"></div>
                            <h4>{{ a.title }} <br> <span>{{ a.relation }}</span></h4>
                            <p>{{ a.description }}</p>
                        </a>
                    </div>
                </div>
            </transition-group>
            <div class="title">Experiences</div>
            <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enter" class="project-row">
                <div v-for="(a,i) in Data" :key="i" :data-index="i" target="_blank">
                    <div class="project" v-if="i > 3">
                        <a v-if="a.link != ''" :href="a.link">
                            <div :class="classArray[i]"></div>
                            <h4>{{ a.title }}</h4>
                            <p>{{ a.description }}</p>
                        </a>
                        <a v-else href="resume.pdf" target="_blank">
                            <div :class="classArray[i]"></div>
                            <h4>{{ a.title }} <br> <span>{{ a.relation }}</span></h4>
                            <p>{{ a.description }}</p>
                        </a>
                    </div>
                </div>
            </transition-group>     
        </div>
        <div v-show="mobile" class="main">
            <div class="title">My Work</div>
            <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enterMobile" class="project-row">
                <div v-for="(a,i) in Data" :key="i" :data-index="i">
                    <div class="project" v-if="i <= 1">
                        <a v-if="a.link != ''" :href="a.link">
                            <div :class="classArray[i]"></div>
                            <h4>{{ a.title }}</h4>
                            <p>{{ a.description }}</p>
                        </a>
                        <a v-else href="resume.pdf" target="_blank">
                            <div :class="classArray[i]"></div>
                            <h4>{{ a.title }} <br> <span>{{ a.relation }}</span></h4>
                            <p>{{ a.description }}</p>
                        </a>
                    </div>
                </div>
            </transition-group>
            <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enterMobile" class="project-row">
                <div v-for="(a,i) in Data" :key="i" :data-index="i">
                    <div class="project" v-if="i > 1 && i <= 3">
                        <a v-if="a.link != ''" :href="a.link">
                            <div :class="classArray[i]"></div>
                            <h4>{{ a.title }}</h4>
                            <p>{{ a.description }}</p>
                        </a>
                        <a v-else href="resume.pdf" target="_blank">
                            <div :class="classArray[i]"></div>
                            <h4>{{ a.title }} <br> <span>{{ a.relation }}</span></h4>
                            <p>{{ a.description }}</p>
                        </a>
                    </div>
                </div>
            </transition-group>
            <div class="title">Experiences</div>
            <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enterMobile" class="project-row">
                <div v-for="(a,i) in Data" :key="i" :data-index="i" target="_blank">
                    <div class="project" v-if="i > 3 && i <= 5">
                        <a v-if="a.link != ''" :href="a.link">
                            <div :class="classArray[i]"></div>
                            <h4>{{ a.title }}</h4>
                            <p>{{ a.description }}</p>
                        </a>
                        <a v-else href="resume.pdf" target="_blank">
                            <div :class="classArray[i]"></div>
                            <h4>{{ a.title }} <br> <span>{{ a.relation }}</span></h4>
                            <p>{{ a.description }}</p>
                        </a>
                    </div>
                </div>
            </transition-group>
            <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enterMobile" class="project-row">
                <div v-for="(a,i) in Data" :key="i" :data-index="i" target="_blank">
                    <div class="project" v-if="i > 5">
                        <a v-if="a.link != ''" :href="a.link">
                            <div :class="classArray[i]"></div>
                            <h4>{{ a.title }}</h4>
                            <p>{{ a.description }}</p>
                        </a>
                        <a v-else href="resume.pdf" target="_blank">
                            <div :class="classArray[i]"></div>
                            <h4>{{ a.title }} <br> <span>{{ a.relation }}</span></h4>
                            <p>{{ a.description }}</p>
                        </a>
                    </div>
                </div>
            </transition-group>
        </div>
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
                    trigger: '.project-row',
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

        const enterMobile = (element, done) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: '.project-row',
                    start: 'center 60%',
                },
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                onComplete: done,
                delay: element.dataset.index*0.75
            })
        }
        return { beforeEnter, enter, enterMobile}
    },
    name: 'my-projects',
    props: [''],
    data() {
        return {
            Data,
            classArray: ['rain', 'pokemon', 'league', 'website', 'rogers', 'imagine', 'method', 'titus'],
            mobile: false,
            windowWidth: null
        }
    },
    created() {
        window.addEventListener('resize', this.checkMobile)
        this.checkMobile()
    },
    methods: {
        checkMobile() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 500) { 
                this.mobile = true
                return
            }
            this.mobile = false
            return
        }
    },
}
</script>

<style scoped>
.main {
    height: 120vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: scroll;
}

.main::-webkit-scrollbar {
    display: none;
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
    width: 40vh;
    height: 40vh;
    margin: 5px;
    overflow: hidden;
}

.project div {
    height: 100%;
}

.project img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.project p {
    text-align: center;
    font-size: 24px;
    font-weight: 100;
    padding: 50px 0;
}

.project h4 {
    text-align: center;
    padding: 10px;
    font-weight: bold;
    max-height: 100px;
    height: 50%;
}

.project span {
    color: #ed7117;
}

.project a {
    height: 100%;
}

.project a:hover {
    text-shadow: 3px 2px black;
}

.title {
    font-size: 64px;
    top: 0;
    left: 0;
    margin-bottom: 5vh;
    margin-top: 5vh;
    opacity: 1;
    font-weight: bolder;
}

.rain, .pokemon, .league, .website, .rogers, .imagine, .method, .titus{
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.25;
}

.rain {
    background-image: url(../assets/images/rain-project.png);
}

.pokemon {
    background-image: url(../assets/images/feebas.png);
}

.league {
    background-image: url(../assets/images/LoL-icon.png);
}

.website {
    background-image: url(../assets/images/vue-logo.png);
}

.rogers {
    background-image: url(../assets/images/Rogers-Emblem.png);
}

.imagine {
    background-image: url(../assets/images/Imagine-logo.jpg);
}

.method {
    background-image: url(../assets/images/method-logo.jpg);
}

.titus {
    background-image: url(../assets/images/feebas.png);
}

@media (max-width: 500px) {
    .main {
        display: flex;
        flex-direction: column;
        height: 180vh;
        align-items: center;
        justify-content: center;
        text-align: left;
    }

    .project {
        width: 50vw;
        height: 50vw;
    }

    .project h4 {
        font-size: 20px;
    }

    .project p {
        padding: 20px;
        font-size: 14px;
    }
}

</style>