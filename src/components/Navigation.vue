<template>
    <header>
        <nav>
            <div class="feeb">
                <img src="../assets/feebas.png" alt="feebas">
            </div>
            <div class="icon">
                <i @click="toggleMobileNav" class="far fa-bars" :class="{'icon-active': toggle}"></i>
            </div>
            <Transition name="side-nav">
                <ul v-show="toggle" class="dropdown-nav">
                    <img src="../assets/feebas.png" alt="feebas">
                    <li><router-link class="link" :to="{name: 'Main'}">Main</router-link></li>
                    <li><router-link class="link" :to="{name: 'About'}">About Me</router-link></li>
                    <li><router-link class="link" :to="{name: 'Specs'}">Specializations</router-link></li>
                    <li><router-link class="link" :to="{name: 'Edu'}">Education</router-link></li>
                    <li><router-link class="link" :to="{name: 'Proj'}">Projects</router-link></li>
                    <li><router-link class="link" :to="{name: 'Contact'}">Contact Me</router-link></li>
                </ul>
            </Transition>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            toggle: false,
            windowWidth: null,
            mobile: false,
        }
    },
    created() {
        window.addEventListener('resize', this.checkMobile)
        this.checkMobile()
    },
    methods: {
        toggleMobileNav() {
            this.toggle = !this.toggle
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

<style scoped>
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
        width: 90%;
        margin: 0 auto;
    }

    ul, .link {
        font-weight: 500;
        color: white;
        list-style: none;
        text-decoration: none;
    }

    li {
        text-transform: uppercase;
        padding: 5%;
        margin-left: 16px;
    }

    .link {
        font-size: 14px;
        transition: 0.5s ease all;
        padding-bottom: 3px;
        border-bottom: 1px solid transparent;
        cursor: pointer;
    }

    .link:hover {
        border-color: black;
        font-weight: bold;
    }

    .feeb {
        display: flex;
        align-items: center;
    }

    .feeb img {
        width: 50px;
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
    }

    .icon-active {
        transform: rotate(180deg);
    }

    .dropdown-nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        max-width: 400px;
        height: 100%;
        background-color: rgba(255,255,255,0.7);
        top: 0;
        right: 0;
        letter-spacing: 2px;
    }

    .dropdown-nav li {
        margin-left: 0;
    }

    .dropdown-nav li .link {
        color: black;
    }

    .dropdown-nav img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
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
</style>