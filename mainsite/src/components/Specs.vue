<template>
    <div class="main">
        <div class="about">
            <h4>About Me</h4>
            <p>Hi my name is Dohyun Moon. I go to University of waterloo aifjh awiuprgfiw qvebhfbslidu fbl</p>
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
    color: #2c3e50;
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
}

.about p {
    text-align: left;
    font-size: 32px;
}

.skills {
    background-color: #2c3e50;
    color: #fcae1e;
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
</style>
