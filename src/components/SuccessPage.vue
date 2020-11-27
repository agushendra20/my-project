<template>
<div>
  <Header v-bind:keranjanglist="keranjanglist"></Header>
  <div class="home mrl-50">
        <div class="col-md-12 center">
            <img src="../assets/menunggu.png" style="max-width:300px;width:100%">
          <h1 class="header text-center">Sukses!!</h1>
          <div class="headerDesc text-center"><span>Pesanan Anda Segera Diproses<br> Selamat Menunggu</span></div>
        </div>
  </div>
    <Footer></Footer>
</div>
</template>

<script>
import service from '@/service.js'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'SuccessPage',
    components: {
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
     getCartList(){
      service.getAll("keranjangs").then(response => {
          this.list = response.data
      })
    }
  }
}
</script>

<style scoped>
  @import  './style.css';
</style>
