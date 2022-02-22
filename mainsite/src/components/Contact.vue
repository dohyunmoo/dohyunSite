<template>
    <div class="main">
        <div class="contact-1">
            <p>Contact Me</p>
        </div>
        <div class="container">
            <form>
                <label for="name">Name</label>
                <input type="text" id="name" name="firstname" placeholder="Your name..">

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact-me',
    data() {
        return {}
    },
    methods: {
        
    },
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.contact-1 {
    font-size: 48px;
}

input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical
}

input[type=submit] {
    background-color: #2c3e50;
    color: #fcae1e;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #162330;
}

.container {
    border-radius: 5px;
    padding: 20px;
}
</style>
