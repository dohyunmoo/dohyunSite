<template>
    <div class="main">
        <div class="title-1">
            <p>Hi, my name is Dohyun Moon</p>
                <p class="titles">
                <Transition name="title-change">
                    <p v-text="titles[index]" v-if="show" class="title-content"></p>
                </Transition>
                </p>
            <div class="title-links">
                <div class="major-title-links">
                    <a href="../docs/Dohyun F2021 Updated.pdf" target="blank">Resume</a>
                </div>
                <div class="minor-title-links">
                    <a href="https://github.com/dohyunmoo" target="blank">Github</a>
                    <a href="https://www.linkedin.com/in/dohyun-m-50a551165/" target="blank">LinkedIn</a>
                </div>
            </div>
        </div>
        <img src="../assets/feebas.png" alt="feebas">
    </div>
</template>

<script>
export default {
    created() {
        setInterval(() => {
            this.increment()
            this.show = !this.show
        }, 750)
    },
    name: 'title-page',
    data() {
        return {
            index: 0,
            titles: ['Software Developer', 'Frontend Developer', 'Motivated', 'Innovator', 'Critical Thinker', 'UFC Mania', 'League of Legends Enjoyer'],
            show: true,
        }
    },
    methods: {
        increment() {
            if((this.index+1) == this.titles.length) this.index = 0
            else this.index++
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

</style>