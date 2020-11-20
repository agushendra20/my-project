import service from '@/service.js'
import detail from './KeranjangDetail'
export default {
  name: 'Keranjang',
  components:{
    detail
  },
  data () {
    return {    
      list: [],
      isEdit: false,
      nama: "",
      noMeja: ""
    }
  },
  created() {},

  mounted() {
    this.getProduct()
  },
  methods: {
    getImgUrl(pic) {
        return require('../assets/'+pic)
    },
    calculatedTotalItem(){
      let sum = 0;
      for(let i = 0; i < this.list.length; i++){
        sum += this.list[i].jumlah_pemesanan * this.list[i].harga
      }
      return sum
    },
  
    getProduct(){
        service.getAll("keranjangs").then(response => {
          this.list = response.data
        })
    },
    handleSubmit(){
      var data = {
        nama: this.nama,
        noMeja: this.noMeja,
        keranjangs: this.setArrayValue()
      };
      service.add("pesanans", data).then(res =>{
        this.deleteMultipleData();
      })
    },

    deleteMultipleData(){
      for(var i = 0;i < this.list.length; i++){
        if(this.list){
          service.delete("keranjangs", this.list[i].id).then(res =>{
         
          }) 
          this.$router.push({name: "SuccessPage"})
          this.$router.go('/')
        }
      }
    },

    setArrayValue(){
      var arr = [];
      for(var i = 0; i < this.list.length; i++){
        arr[i] = {
          jumlah_pemesanan: this.list[i].jumlah_pemesanan,
          keterangan: this.list[i].keterangan,
          products: {
            id: this.list[i].id,
            kode: this.list[i].kode,
            nama: this.list[i].nama,
            harga: this.list[i].harga,
            is_ready: this.list[i].is_ready,
            gambar:this.list[i].gambar
          },
          id: this.list[i].id
        }
      }
      return arr;
    },

    onDelete(id){
      this.$bvModal.msgBoxConfirm('Are you sure?')
          .then(value => {
              if(value == true){
                service.delete("keranjangs", id).then(response =>{
                  this.getProduct();
                  this.$router.go("./keranjang")
               })
            }
            else {
              this.getProduct();
              this.$router.go("./keranjang")
            }
          })
    },


    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")      
    },

    calculatedItem(qty,price){
      return parseInt(qty * price)
  },
  }
}