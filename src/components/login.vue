<template>
 <div>
    <b-container fluid style="border-bottom:solid 2px #42b983 !important;margin-bottom:75px;">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-12 text-left" style="padding-top:10px;padding-bottom:10px;">
                    <h1 class="title">
                      <span style="font-weight: bold;
    font-size: 22px;
    padding: 5px;
    text-shadow: #42b983 1px 1px;
    border-radius: 5px;
    color: #42b983;
    font-style: italic;">Resto Linov</span></h1>
                </div>
            </div>
        </div>
        </b-container>
    <b-container>
        <div style="padding-top:30px;padding-bottom-30px">
            <form v-on:submit.prevent="handleSubmit()">
                <div class="row" style="margin: auto; width: 70%;border:solid 1px #42b983 !important">
                    <div class="col-md-12 text-left center" style="background:lightgreen !important">
                        <div class="row" style="background:white !important">
                            <div class="col-md-12 text-center" style="padding-top:10px;padding-bottom:10px;">
                                <h1 class="title"><span style="font-weight: bold;
    padding: 5px;
    text-shadow: #42b983 1px 1px;
    border-radius: 5px;
    color: #42b983;
    font-style: italic;font-style: italic;">Resto Linov</span> <span v-if="isRegister">Register</span></h1>
                            </div>
                        </div>
                        <div>
                            <div style="margin:20px;">
                            <div class="row" style="padding-top:30px;">
                                <div class="col-md-3">
                                    <label style="color:white">email</label>
                                </div>
                                <div class="col-md-8">
                                    <b-form-input type="text" v-model="email" id="email" name="email" required></b-form-input>
                                </div>
                            </div>
                            <div class="row" style="padding-top:10px;">
                                <div class="col-md-3">
                                    <label style="color:white">Password</label>
                                </div>
                                <div class="col-md-8">
                                    <b-form-input type="password" v-model="password" id="password" name="password" required></b-form-input>
                                </div>
                            </div>
                            <div class="row" style="padding-top:10px;">
                                <div class="col-md-3">

                                </div>
                                <div class="col-md-8">
                                    <button v-if="!isRegister" class="btn btn-primary"><i>LOGIN</i></button>
                                    <button v-if="isRegister" class="btn btn-primary"><i>REGISTER</i></button>
                                    <span @click="onRegister('register')" v-if="!isRegister" style="border-bottom:solid 1px;margin-left:10px">Register</span>
                                    <span @click="onRegister('login')" v-if="isRegister" style="border-bottom:solid 1px;margin-left:10px">Login</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>
    </b-container>
        </div>
</template>

<script>
import service from '@/service.js';
import { router } from '@/router'
export default {
  name: 'Login',
  data () {
    return {   
      email: '',
      password: '',
      isRegister: false
    }
  },
  methods:{
    onRegister(e){
        if(e == "register"){
            this.isRegister = true
        }
        else {
            this.isRegister = false
        }
    },
    handleSubmit() {
        var data = {}
        data.email = this.email
        data.password = this.password
        if(this.email && this.password){
            if(this.isRegister){
                service.login('users/register', data).then(res => {
                    if(res.data){
                        this.$alert("Email berhasil didaftarkan", "Success", "success");
                    }
                })
            }
            else {
                service.login('login', data).then(res => {
                    var user = {
                        accessToken: "",
                        userData: ""
                    };
                    user.accessToken = res.data;
                    user.userData = data;
                    if(user.accessToken) {
                        localStorage.setItem('user', JSON.stringify(user))
                        this.$router.push({name: "Home", params: { from: "Home" }});
                    }
                })
            }
         
        }
    }

  }
}
</script>

<style scoped>
  @import  './style.css';
</style>
