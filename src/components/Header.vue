<template>
<div style="background: #42b983;">
  <div class="mrl-50">
  <b-navbar toggleable="lg">
    <b-navbar-brand v-on:click="onRouter('Home')" style="font-weight: bold;
    font-size: 22px;
    padding: 5px;
    text-shadow: 1px 1px white;
    border-radius: 5px;
    color: white;">Resto Linov</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-on:click="onRouter('Home')"><span style="color: white !important;font-weight: 300;">Home</span></b-nav-item>
        <b-nav-item v-on:click="onRouter('FoodMenu')" style="color: white !important;font-weight: 300;"><span style="color: white !important;font-weight: 300;">Foods</span></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
          <button v-on:click="logout()">logout</button>
      <b-nav-item v-on:click="onRouter('KeranjangDetail')">
        <span style="color: white;font-weight: 300;">Keranjang<i class="fa fa-shopping-bag" aria-hidden="true" style="margin-left:5px;"></i></span>
        <span style="background: white;padding: 2px 7px;border-radius: 100%;font-weight: bold;">{{keranjanglist}}</span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</div>
</template>

<script>
import service from '@/service.js';
 import { router } from '@/router'
export default {
  props:['keranjanglist'],
  name: 'Header',
   data () {
    return {    
    }
  },
  methods:{
    logout(){
      if (localStorage.getItem('user')) {
        service.logout()
        router.push({name: "Login"})
        }
    },
    onRouter(e){
      router.push({ name: e, params: {from: e} })
    }
    
  }

}
</script>

<style scoped>
  @import  './style.css';
</style>
