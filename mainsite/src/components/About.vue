<template>
    <div class="main">
        <div class="about">
            <h4>About Me</h4>
            <p>I'm an inspired developer fully charged with creativity.</p>
            <p>Ever since I learned about programming in the first semester of my undergraduate degree, I was fascinated with what it can achieve!
                My never-ending desire to learn innovative technologies  
            </p>
            <p></p>
        </div>
        <Transition appear @before-enter="beforeEnter" @enter="enter">        
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
                    <p>Azure, vSphere, Jenkins, Git, Docker, Linux/Windows CLI</p>
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
                },
                duration: 0.75,
                opacity: 1,
            })
        }
        return { beforeEnter, enter }
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
    padding: 5vh;
    width: 40%;
}

.about h4 {
    font-size: 64px;
    padding: 10px;
    font-weight: bolder;
}

.about p {
    text-align: left;
    font-size: 24px;
}

.skills {
    color: #2c3e50;
    background-color: #fcae1e;
    padding: 20px;
    width: 60%;
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
    }

    .skills {
        width: 100vw;
        height: 100vh;
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
