<template>
    <div class="main">
        <div class="contact-1">
            <p>Contact Me</p>
        </div>
        <div class="container">
            <form>
                <label class="label" for="name">Name</label>
                <input type="text" id="name" name="firstname" placeholder="Your name..">
                <label class="label" for="name">Email</label>
                <input type="text" id="email" name="emailaddress" placeholder="Your email..">

                <label class="label" for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
                <input class="submit-btn" type="submit" value="Submit">
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
    flex-direction: row;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
}

.contact-1 {
    font-size: 48px;
    margin-left: 20%;
    min-width: 30%;
    text-align: left;
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
    margin-right: 15%;
    width: 35%;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (max-width: 500px) {
    .main {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        align-items: center;
        justify-content: center;
        text-align: left;
    }

    .contact-1 {
        width: 100%;
        text-align: center;
        margin: 0;
        font-size: 64px;
        margin-bottom: 10%;
    }

    .container {
        margin: 0;
        width: 90%;
        align-items: center;
    }

    .label {
        text-align: center;
    }

    .submit-btn {
        align-self: center;
    }
}
</style>
