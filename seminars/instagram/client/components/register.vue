<template>
    <div class="page">
        <div class="focus">
            <form class="focus_holder" v-on:keydown.enter="register">
                <input type="text" class="form-control" placeholder="Login" v-model="username">
                 <input type="password" class="form-control" placeholder="Password" v-model="passwordA">
                  <input type="password" class="form-control" placeholder="Password again" v-model="passwordB">
                  <button type="button" class="btn btn-danger btn-block" v-on:click="register">
                    Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>

</template>

<script>
    module.exports = {
        data: function() {
            return {
                username: "",
                passwordA: "",
                passwordB: ""
            }
        },
        methods: {
            register: function() {
                if (this.passwordA === this.passwordB) {
                    let promise = this.$auth.register(this.username, this.passwordA);
                    promise.then(function() {
                        console.log("Success");
                        this.$router.push("/login");
                    });
                    promise.catch(function(error) {
                        alert("Error: " + error);
                    });
                }
            }
        }
    }
</script>