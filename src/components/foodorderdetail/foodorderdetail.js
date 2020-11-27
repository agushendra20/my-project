import service from '@/service.js'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
export default {
  name: 'FoodOrderDetail',
  components:{
    Header,Footer
  },
  data() {
    return {
      data: {},
      list: [],
    }
  },
  created() {
    this.getProductById(this.$route.params.id);
    this.getCartList();
  },
  mounted() {
    if (this.$route.params.id) {
      this.getProductById(this.$route.params.id)
    }
    else{
      service.logout();
    }
  },

  computed: {
    getAssets() {
      return {
        ...this.data,
        gambar: this.data.gambar && require(`../../assets/${this.data.gambar}`)
      }
    },
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

  methods: {
    calculatedItem(qty, price) {
      return parseInt(qty * price)
    },
    getProductById(id) {
      service.getByid("products", id).then(response => {
        this.data = response.data;
      })
    },
    getCartList(){
      service.getAll("keranjangs").then(response => {
          this.list = response.data
      })
    },
    onCart() {
      this.data.jumlah_pemesanan = parseInt(this.data.jumlah_pemesanan);
      service.add("keranjangs", this.data).then(response => {
        if (response) {
          this.$alert("Pesananmu sudah dimasukkan kedalam keranjang", "Success", "success").then(res => {
            if (res == true) {
              this.getCartList();
              this.$router.push({ name: "KeranjangDetail", params:{ from: "KeranjangDetail" }});
            }
          });
        }
      }).catch(error => {
      })

    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}