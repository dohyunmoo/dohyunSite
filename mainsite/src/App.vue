<template>
    <header>
        <nav>
            <Transition appear @before-enter="beforeEnter" @enter="enter">
                <div class="feeb">
                    <a href="https://pokemondb.net/pokedex/feebas" target="blank">
                        <img src="./assets/images/feebas.png"  alt="feebas">
                    </a>
                    <div class="contact-email">
                        <a href="mailto:d6moon@uwaterloo.ca">d6moon@uwaterloo.ca</a>
                    </div>
                </div>
            </Transition>
            <Transition appear @before-enter="beforeEnter" @enter="enter">
                <div class="icon">
                    <i @click="toggleNav" class="far fa-bars" :class="{'icon-active': toggle}"></i>
                </div>
            </Transition>
            <Transition name="side-nav">
                <ul v-show="toggle" class="dropdown-nav">
                    <img src="./assets/images/feebas.png" alt="feebas">
                    <li><a class="link" href="#home">Main</a></li>
                    <li><a class="link" href="#about">About Me</a></li>
                    <!-- <li><a class="link" href="#about">Specializations</a></li> -->
                    <!-- <li><a class="link" href="#experience">Experience</a></li> -->
                    <li><a class="link" href="#projects">Projects</a></li>
                    <li><a class="link" href="#contact">Contact Me</a></li>
                </ul>
            </Transition>
        </nav>
    </header>
    <h1>
        <a name="home"><Title></Title></a>
    </h1>
    <h1>
        <a name="about"><About></About></a>
    </h1>
    <!-- <h1>
        <a name="experience"><Experience></Experience></a>
    </h1> -->
    <h1>
        <a name="projects"><Projects></Projects></a>
    </h1>
    <h1>
        <a name="contact"><Contact></Contact></a>
    </h1>
    <!-- <Navigation id="nav"></Navigation> -->
</template>

<script>

// import Navigation from './components/Navigation.vue'
import Title from './components/Title.vue'
import About from './components/About.vue'
// import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

import gsap from 'gsap'

export default {
    setup() {
        const beforeEnter = (element) => {
            element.style.transform = 'translateY(-100px)'
            element.style.opacity = 0
        }

        const enter = (element) => {
            gsap.to(element, {
                duration: 1,
                y: 0,
                opacity: 1,
            })
        }
        return { beforeEnter, enter }
    },
    name: 'App',
    data() {
        return {
            name: 'Dohyun Moon',
            show: false,
            toggle: false,
            windowWidth: null,
            mobile: false,
        }
    },
    components: {
        // Navigation,
        Title,
        About,
        // Experience,
        Projects,
        Contact,
    },
    created() {
        window.addEventListener('resize', this.checkMobile)
        this.checkMobile()
    },
    methods: {
        toggleNav() {
            this.toggle = !this.toggle
        },
        closeNav() {
            if (this.toggle == true) this.toggle = !this.toggle
        },
        checkMobile() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 750) { 
                this.mobile = true
                return
            }
            this.mobile = false
            return
        }
    },
}

</script>

<style>
header {
    background-color: rgba(0,0,0,0);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: white;
}

nav {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 100%;
    margin: 0 auto;
}

ul, .link {
    font-weight: 500;
    list-style: none;
    text-decoration: none;
}

li {
    text-transform: uppercase;
    padding: 5%;
    margin-left: 16px;
}

.link {
    font-size: 16px;
    transition: 0.5s ease all;
    padding-bottom: 3px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    opacity: 0.8;
    color: #2c3e50;
    font-weight: 500;
}

.link:hover {
    border-color: black;
    font-weight: bold;
    animation: nav-hover 1s;
}

.feeb {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
}

.feeb img {
    width: 50px;
    transition: 0.8s ease all;
    margin-left: 20%;
}

.feeb a {
    margin-left: 20%;
}

.icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
    z-index: 100;
}

.icon i {
    cursor: pointer;
    font-size: 24px;
    transition: 0.8s ease all;
    color: rgba(255,255,255,0.8);
}

.icon-active {
    transform: rotate(180deg);
}

.dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 50%;
    max-width: 400px;
    height: 100%;
    background-color: rgba(255,244,244,0.5);
    color: #2c3e50;
    top: 0;
    right: 0;
    letter-spacing: 2px;
}

.dropdown-nav li {
    margin-left: 0;
}

.dropdown-nav li a{
    color: #2c3e50;
}

.dropdown-nav img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

.contact-email a{
    margin-left: 15px;
    color: rgba(255,255,255,0.7);
    font-weight: bolder;
}

.side-nav-enter-active,
.side-nav-leave-active {
    transition: 1s ease all;
}

.side-nav-enter-from,
.side-nav-leave-to {
    transform: translateX(100%);
}

.side-nav-enter-to {
    transform: translateX(0%);
}

@keyframes nav-hover {
    from{
        opacity: 0.2;
    }
    to {
        opacity: 1;
    }
}
</style>