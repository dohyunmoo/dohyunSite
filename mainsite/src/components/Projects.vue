<template>
    <div class="main">
        <div v-for="(a,i) in projData" :key="i" class="project">
            <h4>{{ a.projTitle }}<span></span></h4>
            <p>{{ a.description }}</p>
            <a :href="a.link">hello</a>
        </div>
    </div>
</template>

<script>

import projData from '../assets/projData.js'

export default {
    name: 'my-projects',
    props: [''],
    data() {
        return {
            projData,
        }
    }
}
</script>

<style scoped>
.main {
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.project {
    background-color: rgba(255,255,255,0.8);
    width: 70%;
    height: 30%;
    margin-top: 5vh;
    margin-bottom: 5vh;
    margin-left: -50vh;
}

.project p {
    text-align: left;
    font-size: 24px;
    font-weight: 100;
    padding: 15px;
}

.project h4 {
    text-align: center;
    padding: 10px;
}

.project span {
    background-color: #2c3e50;
    color: #fcae1e;
    
}

.project:hover {
    background-color: #2c3e50;
    color: #fcae1e;
}
</style>
