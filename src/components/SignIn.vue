<template>
    <div>
        <h1>Login</h1><br>
           <label for="username">Username</label>
           <input type="text" v-model="username"><br>
           <label for="password">Password</label>
            <input type="password" v-model="password"><br>
            <button @click="login">Login</button>
            <p style="color: red">{{message}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username: "", password: "", message: ""
        };
    },

    methods: {
        login(){
            if(this.username ==="admin" && this.password==="123"){
                this.$emit("setUser", {
                    username: this.username,
                    password: this.password
                });
            }else{
                this.message = "Incorrect username & password";
            }
        }
    }
    };   	  
</script>

