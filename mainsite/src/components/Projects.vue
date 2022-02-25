<template>
    <div class="main">
        <div class="project-row">
            <Transition appear @before-enter="beforeEnter1" @enter="enter">
                <div id="wrapper-1">
                    <div class="project">
                        <p>item 1</p>
                    </div> 
                </div>
            </Transition>
            <Transition appear @before-enter="beforeEnter2" @enter="enter">
                <div id="wrapper-2">
                    <div class="project">
                        <p>item 2</p>
                    </div>
                </div>
            </Transition>
        </div>
        <div id="blocker">-</div>
        <div class="project-row">
            <Transition appear @before-enter="beforeEnter3" @enter="enter">
                <div id="wrapper-3">
                    <div class="project">
                        <p>item 3</p>
                    </div>
                </div>
            </Transition>
            <Transition appear @before-enter="beforeEnter4" @enter="enter">
                <div id="wrapper-4">
                    <div class="project">
                        <p>item 4</p>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script>

import projData from '../assets/projData.js'
import gsap from 'gsap'

export default {
    setup() {
        const beforeEnter1 = (element) => {
            element.style.transform = 'translateX(-100px)'
            element.style.opacity = 0
        }
        const beforeEnter2 = (element) => {
            element.style.transform = 'translateY(-100px)'
            element.style.opacity = 0
        }
        const beforeEnter3 = (element) => {
            element.style.transform = 'translateY(100px)'
            element.style.opacity = 0
        }
        const beforeEnter4 = (element) => {
            element.style.transform = 'translateX(100px)'
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
                onComplete: done
            })
        }
        return { beforeEnter1, beforeEnter2, beforeEnter3, beforeEnter4, enter}
    },
    name: 'my-projects',
    props: [''],
    data() {
        return {
            projData,
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
    margin: 3px;
}

.project {
    background-color: rgb(255,255,255);
    width: 30vw;
    height: 30vh;
    margin: 0px 3px;
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
    color: #fcae1e;
    
}

.project:hover {
    background-color: #2c3e50;
    color: #fcae1e;
}

#blocker {
    color: #fcae1e;
    height: 1px;
}
</style>
