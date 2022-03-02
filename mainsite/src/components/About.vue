<template>
    <div class="main">
        <div class="about">
            <h4>About Me</h4>
            <p>I'm an inspired developer fully charged with creativity.</p>
            <p>Ever since I learned about programming in the first semester of my undergraduate degree, I was fascinated with what it can achieve!
                My never-ending desire to learn innovative technologies
            </p>
            <p>hehehehehehe</p>
        </div>
        <Transition appear @before-enter="beforeEnter" @enter="enter">
            <div class="skills">
                <div class="content">
                    <Transition appear @before-enter="beforeEnter" @enter="enterHeaders">
                        <h4>Programming Languages</h4>
                    </Transition>
                    <Transition appear @before-enter="beforeEnter" @enter="enterSections">
                        <p>C, C++, C#, Python, HTML, CSS, Javascript, Terraform, Ansible, Powershell</p>
                    </Transition>
                </div>
                <div class="content">
                    <Transition appear @before-enter="beforeEnter" @enter="enterHeaders">
                        <h4>Frameworks and Libraries</h4>
                    </Transition>
                    <Transition appear @before-enter="beforeEnter" @enter="enterSections">
                        <p>VueJS, NodeJS, Selenium, Robot Framework, Pester</p>
                    </Transition>
                </div>
                <div class="content">
                    <Transition appear @before-enter="beforeEnter" @enter="enterHeaders">
                        <h4>Others</h4>
                    </Transition>
                    <Transition appear @before-enter="beforeEnter" @enter="enterSections">
                        <p>Azure, vSphere, Jenkins, Git, Docker, Linux/Windows CLI</p>
                    </Transition>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>

import gsap from 'gsap'

export default {
    setup() {
        const beforeEnter = (element) => {
            element.style.opacity = 0
        }

        const enter = (element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: '.skills',
                    start: 'top center'
                },
                duration: 0.75,
                opacity: 1,
            })
        }

        const enterHeaders = (element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: '.content',
                    start: 'center center'
                },
                // delay: 0.75,
                duration: 0.75,
                opacity: 1,
            })
        }

        const enterSections = (element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: '.content',
                    start: 'center center'
                },
                delay: 1,
                duration: 0.75,
                opacity: 1,
            })
        }

        return { beforeEnter, enter, enterHeaders, enterSections }
    },
    name: 'about-me',
    props: ['']
}
</script>

<style scoped>
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
}

.about h4 {
    font-size: 64px;
    padding: 20px;
    font-weight: bolder;
}

.about p {
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