import service from '../../service.js'
export default {
  name: 'FoodMenu',
  data () {
    return {    
      list: [],
      searchData: ""
    }
  },
  created() {},

  mounted() {
    this.getProduct()
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