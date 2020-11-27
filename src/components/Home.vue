<template>

<div>
  <Header v-bind:keranjanglist="keranjanglist"></Header>
  <div class="home mrl-50">
    <div class="row pl-15 pr-15" style="margin-top:25px;">
        <div class="col-md-4 col-s-12 center" style="padding-left:20px;">
          <h1 class="header">Delicious Food Menu</h1>
          <div class="headerSpan"><span>in Your Handphone</span></div>
          <div class="headerDesc"><span>Ayo segera pilih dan pesan makanan favorit anda</span></div>
          <div style="margin-top:10px;text-align:left;">
            <b-button variant="success" v-on:click="onRouter()" style="font-weight:100;">
              <i class="fa fa-long-arrow-right" style="padding-right:5px;"></i>Pesan
              </b-button>
          </div>
        </div>
        <div class="col-md-8 col-s-12" style="padding:10px">
          <img src="../assets/ilustrasi.png" style="width:100%">
        </div>
    </div>
  </div>
    <bestFood></bestFood>
    <Footer></Footer>
</div>
</template>

<script>
import service from '@/service.js'
import bestFood from './../components/bestfood/BestFood.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
     components: {
      bestFood,
      Header,
      Footer
  },
  data () {
    return {    
      list: [],
    }
  },
  computed:{
    keranjanglist () {
      let sum = 0;
      if(this.list != undefined){
        for (let i = 0; i < this.list.length; i++) {
          sum += this.list[i].jumlah_pemesanan
        }
      }
      return sum
    }
  },
  created(){
     if(!this.$route.params.from){
      service.logout();
    }
  },
  mounted(){
      this.getCartList();
  },
  methods:{
    onRouter(){
      this.$router.push({ name: "FoodMenu" , params: {from: "FoodMenu"}});
    },
     getCartList(){
      service.getAll("keranjangs").then(response => {
          this.list = response.data
      })
    },
  }
}
</script>

<style scoped>
  @import  './style.css';
</style>
