<template>
    <div class="main">
        <div class="title-1">
            <p v-show="!mobile" class="inner-p">Hi, my name is Dohyun Moon</p>
            <p v-show="mobile" class="inner-p-mobile">Hi, my name is</p>
            <p v-show="mobile" class="inner-p-mobile">Dohyun Moon</p>
            <div id="titles">
                <span class="titles"></span><span class="cursor" v-show="!mobile">_</span>
            </div>
            <div class="title-links">
                <div class="major-title-links">
                    <a href="https://github.com/dohyunmoo/dohyunSite/blob/main/src/assets/resume.pdf" target="_blank">Resume</a>
                </div>
                <div class="minor-title-links">
                    <a href="https://github.com/dohyunmoo" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/dohyun-m-50a551165/" target="_blank">LinkedIn</a>
                </div>
            </div>
        </div>
        <img id='main-picture' src="../assets/images/me.png" alt="feebas">
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
    mounted() {
        var masterTl = gsap.timeline({repeat: -1})
        
        this.titles.forEach(title => {
            var tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
            tl.to('.titles', {duration: 1, text: title})
            masterTl.add(tl)
        })

        var cursor = gsap.to('.cursor', {opacity: 0, repeatDelay: 0.25, ease: "power2.inOut", repeat: -1})
        cursor
    },
    created() {
        window.addEventListener('resize', this.checkMobile)
        this.checkMobile()
    },
    name: 'title-page',
    data() {
        return {
            index: 0,
            titles: ['Software Developer', 'Motivated', 'Innovator', 'Critical Thinker', 'UFC Fan', 'Riot Games Lover', 'Diamond Jungler :)'],
            show: true,
            mobile: false,
            windowWidth: null
        }
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
    display: flex;
    flex-direction: row;
    height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-size: 48px;
    min-height: 100%;
    overflow: hidden;
}

.title-1 {
    display: flex;
    flex-direction: column;
    padding: 0;
    font-size: 64px;
}

.titles {
    height: 64px;
    font-weight: bolder;
}

.title-links {
    /* background-color: black; */
    margin-left: 3px;
    display: flex;
    flex-direction: column;
}

.title-links a {
    background-color: #ed7117;
    color: #2c3e50;
    margin: 3px;
    padding: 4px;
    border-radius: 10px;
}

.minor-title-links a:hover {
    background-color: #2c3e50;
    color: #fcae1e;
}

.major-title-links a:hover {
    background-color: #2c3e50;
    color: #fcae1e;
}

.minor-title-links {
    display: flex;
    flex-direction: row;
    padding-top: 5px;
}

.minor-title-links a {
    font-size: 28px;
}

.major-title-links a {
    font-size: 36px;
}

#main-picture {
    /* width: 40%;
    height: 60%; */
    padding-left: 100px;
}

@media (max-width: 500px) {
    .main {
        display: flex;
        flex-direction: column-reverse;
        height: 100vh;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 48px;
    }

    .title-1 {
        display: flex;
        flex-direction: column;
        padding: 0;
        font-size: 36px;
        margin-left: 10%;
        margin-right: 10%;
    }

    .inner-p-mobile, .titles {
        text-align: center;
        font-size: 42px;
    }

    .major-title-links {
        margin-top: 10px;
    }

    .title-links {
        align-items: center;
    }
}
</style>