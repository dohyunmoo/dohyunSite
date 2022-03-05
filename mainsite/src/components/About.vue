<template>
    <div class="main">
        <div class="about">
            <h4>About Me</h4>
            <div class="about-texts">
                <p>I'm an inspired developer fully charged with creativity.</p>
                <p>Ever since I learned about programming in the first semester of my undergraduate degree, I was fascinated with what it can achieve!
                    My never-ending desire to learn innovative technologies
                </p>
                <p>hehehehehehe</p>
            </div>
        </div>
        <div class="skills">
            <div class="content">
                <h4>Programming Languages</h4>
                <p>C, C++, C#, Python, HTML, CSS, Javascript, Terraform, Ansible, Powershell</p>
            </div>
            <div class="content">
                <h4>Frameworks and Libraries</h4>
                <p>VueJS, NodeJS, Selenium, Robot Framework, Pester</p>
            </div>
            <div class="content">
                <h4>Others</h4>
                <p>Git, Linux/Windows CLI, Azure, vSphere, Jenkins, Docker</p>
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

<style scoped>

.exm {
    visibility: hidden;
}

.neg {
    visibility: visible;
}

.main {
    /* color: #2c3e50; */
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}


.about {
    padding-top: 5vh;
    width: 40%;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.about h4 {
    font-size: 64px;
    padding: 20px;
    font-weight: bolder;
}

.about-texts {
    text-align: left;
    font-size: 24px;
    padding: 0 40px;
}

.skills {
    color: #2c3e50;
    background-color: #fcae1e;
    padding: 20px;
    width: 60%;
    overflow: scroll;
}

.skills::-webkit-scrollbar {
    display: none;
}

.content {
    padding: 40px;
}

.content p {
    font-size: 32px;
    text-align: left;
}

.content h4 {
    font-size: 56px;
    padding: 10px;
}

@media (max-width: 500px) {
    .main {
        display: flex;
        flex-direction: column;
        height: 150vh;
        align-items: center;
        justify-content: center;
        text-align: left;
    }

    .about {
        width: 100vw;
        height: 50vh;
        margin: 0;
    }

    .about h4 {
        font-size: 48px;
        text-align: center;
    }

    .about p {
        font-size: 20px;
    }

    .skills {
        width: 100vw;
        height: 100vh;
        margin: 0;
    }

    .skills h4 {
        font-size: 48px;
        padding: 0;
        padding-bottom: 15px;
    }

    .skills p {
        font-size: 24px;
    }
}
</style>