import service from '../../service'
export default {
  name: 'bestFood',
  data () {
    return {    
      list: [],
    }
  },
  created() {},

  mounted() {
    this.getBestproduct()
  },
  
  methods: {
    getImgUrl(pic) {
        return require('@/assets/'+pic)
    },

    getBestproduct(){
        service.getAll("best-products").then(response => {
          this.list = response.data
          console.log(response);
        })
    },

    onRouter(){
      this.$router.push({ name: 'FoodMenu' })
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