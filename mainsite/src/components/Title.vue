<template>
    <div class="title-1">
        <div class="title-2">
            <p>Hi, my name is Dohyun Moon<br>
            <Transition name="title-change">
                <span class="titles" @mouseover="increment" v-text="titles[index]"></span>
            </Transition>
            </p>
            <div class="title-links">
                <div class="major-title-links">
                    <a href="../docs/Dohyun F2021 Updated.pdf" target="blank">Resume</a>
                    <!-- <object data="../docs/Dohyun F2021 Updated.pdf" type="application/pdf" style="height: -webkit-fill-available;width: -webkit-fill-available"/> -->
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
    name: 'title-page',
    data() {
        return {
            index: 0,
            titles: ['Software Developer', 'Frontend Developer', 'Motivated', 'Innovator', 'UFC Mania', 'League of Legends Enjoyer'],
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
.title-1 {
    display: flex;
    flex-direction: row;
    height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-size: 48px;
}

.title-2 {
    display: flex;
    flex-direction: column;
}

.titles {
    font-weight: bolder;
}

.title-links {
    /* background-color: black; */
    margin: 3px;
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

.title-links a:hover {
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

</style>
