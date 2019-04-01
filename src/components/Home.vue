<template>
    <div>
        <h1>Home {{username}}</h1>
        <button @click="logout">Log Out</button>
    </div>
</template>

<script>
export default {
    props: ["username"],
    methods: {
        logout(){
            this.$emit ("setUser", null);
        }
    }
};
</script>

