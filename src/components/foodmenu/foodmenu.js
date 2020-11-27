import service from '../../service.js'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
export default {
  name: 'FoodMenu',
  components:{
    Header,Footer
  },
  data () {
    return {    
      list: [],
      productlist: [],
      searchData: ""
    }
  },
  computed:{
    keranjanglist () {
      let sum = 0;
      if(this.productlist != undefined){
        for (let i = 0; i < this.productlist.length; i++) {
          sum += this.productlist[i].jumlah_pemesanan
        }
      }
      return sum
    }
  },
  created() {
    if(!this.$route.params.from){
      service.logout();   
    }
  },

  mounted() {
    this.getProduct();
    this.getCartList();
  },
  
  methods: {
    getImgUrl(pic) {
        return require('../../assets/'+pic)
    },
    searchMenu(){
      if(this.searchData == ""){
        this.getProduct();
      }
      else {
        service.search('products', this.searchData).then(response=> {
        this.list = response.data;
       })
      }
    },
    getCartList(){
      service.getAll("keranjangs").then(response => {
          this.productlist = response.data
      })
    },
    getProduct(){
        service.getAll("products").then(response => {
          this.list = response.data
          console.log(response);
        })
    },

    onOrderItem(e){
      this.$router.push({ name: 'FoodOrderDetail', params: { id: e.id }})
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")      
    },
  }
}