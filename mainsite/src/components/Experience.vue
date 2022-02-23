<template>
    <div class="main">
        <div v-for="(a,i) in jobData" :key="i" :class="[a.id%2 == 1 ? 'experience-left': 'experience-right']">
            <Transition 
                appear
                @before-enter="beforeEnter"
                @enter="Enter"
            >
                <div>
                    <h4>{{ a.jobTitle }} @ <span>{{ a.company }}</span></h4>
                    <p>{{ a.content }}</p>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script>

import jobData from '../assets/jobData.js'
import gsap from 'gsap'

export default {
    setup() {
        const beforeEnter = (element) => {
            element.style.transform = 'translateX(-100px)'
            element.style.opacity = 0
        }

        const Enter = (element) => {
            console.log('akasdaksdk')
            gsap.to(element, {
                duration: 1,
                x: 0,
                opacity: 1,
            })
        }
        return { beforeEnter, Enter }
    },
    name: 'coop-experience',
    props: [''],
    data() {
        return {
            jobData,
        }
    },
}
</script>

<style scoped>
.main {
    height: 150vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.experience-left,
.experience-right {
    background-color: rgba(255,255,255,0.8);
    width: 70%;
    margin-top: 5vh;
    margin-bottom: 5vh;
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
}

.experience-left span,
.experience-right span {
    background-color: #2c3e50;
    color: #fcae1e;
}

.experience-left {
    margin-left: -50vh;
}

.experience-right {
    margin-right: -50vh;
}

.experience-left:hover,
.experience-right:hover {
    background-color: #2c3e50;
    color: #fcae1e;
}
</style>
