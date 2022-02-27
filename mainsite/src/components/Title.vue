<template>
    <div class="main">
        <div class="title-1">
            <p v-show="!mobile" class="inner-p">Hi, my name is Dohyun Moon</p>
            <p v-show="mobile" class="inner-p-mobile">Hi, my name is <br> Dohyun Moon</p>
                <p class="titles">
                <Transition name="title-change">
                    <p v-text="titles[index]" v-if="show" class="title-content"></p>
                </Transition>
                </p>
            <div class="title-links">
                <p class="major-title-links">
                    <a href="file:///C:/Personal%20Programming/Web%20Dev/dohyunSite/mainsite/src/assets/resume.pdf" target="_blank">Resume</a>
                </p>
                <div class="minor-title-links">
                    <a href="https://github.com/dohyunmoo" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/dohyun-m-50a551165/" target="_blank">LinkedIn</a>
                </div>
            </div>
        </div>
        <img src="../assets/images/feebas.png" alt="feebas">
    </div>
</template>

<script>
export default {
    created() {
        setInterval(() => {
            this.increment()
            this.show = !this.show
        }, 750)

        window.addEventListener('resize', this.checkMobile)
        this.checkMobile()
    },
    name: 'title-page',
    data() {
        return {
            index: 0,
            titles: ['Software Developer', 'Frontend Developer', 'Motivated', 'Innovator', 'Critical Thinker', 'UFC Mania', 'Riot Games Fan'],
            show: true,
            mobile: false,
            windowWidth: null
        }
    },
    methods: {
        increment() {
            if((this.index+1) == this.titles.length) this.index = 0
            else this.index++
        },
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
}

.title-1 {
    display: flex;
    flex-direction: column;
    padding: 0;
}

.titles {
    height: 48px;
}

.title-content {
    font-weight: bolder;
}

.title-links {
    /* background-color: black; */
    margin: 3px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
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

.title-change-enter-from {
    opacity: 0;
    transform: translateY(-25px);
}

.title-change-enter-active {
    transition: all 0.3s ease;
}

.title-change-leave-from,
.title-change-enter-to {
    opacity: 1;
    transform: translateY(0px);
}

.title-change-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.title-change-leave-active {
    transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

@media (max-width: 500px) {
    .main {
        display: flex;
        flex-direction: column-reverse;
        height: 100vh;
        align-items: center;
        justify-content: center;
        text-align: left;
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

    .inner-p-mobile, .titles{
        text-align: center;
        font-size: 42px;
    }


    .title-links {
        align-items: center;
    }
}

</style>