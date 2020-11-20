<template>
<div style="background: #42b983;">
  <div class="mrl-50">
  <b-navbar toggleable="lg">
    <b-navbar-brand href="/" style="font-weight: bold;
    font-size: 22px;
    padding: 5px;
    text-shadow: 1px 1px white;
    border-radius: 5px;
    color: white;">Resto Linov</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="./"><span style="color: white !important;font-weight: 300;">Home</span></b-nav-item>
        <b-nav-item href="./#/foodmenu" style="color: white !important;font-weight: 300;"><span style="color: white !important;font-weight: 300;">Foods</span></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
              
      <b-nav-item href="./#/keranjang">
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
import service from '@/service.js'
export default {
  name: 'Header',
   data () {
    return {    
      list: []
    }
  },
  computed:{
    keranjanglist: function(){
      let sum = 0;
      for(let i = 0;i < this.list.length; i++){
        sum += this.list[i].jumlah_pemesanan
      }
      return sum
    }
    
  },
  created(){
  },
  mounted(){
    this.getCartList();
  },

  methods:{
    getCartList(){
      service.getAll("keranjangs").then(response => {
          this.list = response.data
          console.log(response)
      })
    }
  }

}
</script>

<style scoped>
  @import  './style.css';
</style>
