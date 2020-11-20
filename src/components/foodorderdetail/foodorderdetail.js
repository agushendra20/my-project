import service from '@/service.js'
export default {
  name: 'FoodOrderDetail',
  data () {
    return {    
      data:{}
    }
  },
  created() {
      this.getProductById(this.$route.params.id)
  },
  mounted(){
      if(this.$route.params.id){
        this.getProductById(this.$route.params.id)
      }
      else
        this.$router.push({name: "Home"})
  },

  computed:{
    getAssets(){
      return {
        ...this.data,
        gambar: this.data.gambar && require(`../../assets/${this.data.gambar}`)
      }
    }
  },

  methods: {
    calculatedItem(qty,price){
        return parseInt(qty * price)
    },
    getProductById(id){
        service.getByid("products", id).then(response => {
          this.data = response.data;
        })
    },
    onCart(){
        this.data.jumlah_pemesanan = parseInt(this.data.jumlah_pemesanan);
        service.add("keranjangs", this.data).then(response => {
          if(response){
            this.$alert("Pesananmu sudah dimasukkan kedalam keranjang","Success", "success").then(res=> {
              if(res == true){
                this.$router.push({name: "Keranjang"});
                this.$router.go('/')
              }
            });
          }
        }).catch(error =>{
          console.log(error);
        })

    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")      
    }
  }
}