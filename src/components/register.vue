<template>
 <div>
    <b-container fluid style="border-bottom:solid 2px #42b983 !important;margin-bottom:75px;">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-12 text-left" style="padding-top:10px;padding-bottom:10px;">
                    <h1 class="title">
                      <span style="font-weight: bold;font-size: 22px;
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
            <form v-on:submit.prevent="onSubmit">
                <div class="row" style="margin: auto; width: 50%;border:solid 1px #42b983 !important">
                    <div class="col-md-12 text-left center" style="background:lightgreen !important">
                        <div class="row" style="background:white !important">
                            <div class="col-md-12 text-center" style="padding-top:10px;padding-bottom:10px;">
                                <h1 class="title"><span style="font-weight: bold;font-size: 22px;
                                padding: 5px;text-shadow: #42b983 1px 1px;border-radius: 5px;
                                color: #42b983;font-style: italic;
                                font-style: italic;">Register</span>
                                </h1>
                            </div>
                        </div>
                        <div>
                            <div style="margin:20px;">
                            <div class="row" style="padding-top:30px;">
                                <div class="col-md-3">
                                    <label style="color:white">Username</label>
                                </div>
                                <div class="col-md-8">
                                    <b-form-input type="text" v-model="username" id="username" name="username"></b-form-input>
                                </div>
                            </div>
                            <div class="row" style="padding-top:10px;">
                                <div class="col-md-3">
                                    <label style="color:white">Password</label>
                                </div>
                                <div class="col-md-8">
                                    <b-form-input type="password" v-model="password" id="password" name="password"></b-form-input>
                                </div>
                            </div>
                            <div class="row" style="padding-top:10px;">
                                <div class="col-md-3">

                                </div>
                                <div class="col-md-8">
                                    <button class="btn btn-primary" v-on:click="handleSubmit()"><i>LOGIN</i></button>
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
import service from '@/service.js'
export default {
  name: 'Register',
  data () {
    return {   
      username: '',
      password: '' 
    }
  },
  methods:{
    onRouter(){
      this.$router.push({ name: "FoodMenu" });
    }
  }
}
</script>

<style scoped>
  @import  './style.css';
</style>
