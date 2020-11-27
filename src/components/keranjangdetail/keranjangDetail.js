import service from '../../service.js'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
export default {
  name: 'KeranjangDetail',
  components: {
	   Header, Footer
  },
  data () {
    return {    
      list: [],
      isEdit: false,
      nama: "",
      noMeja: ""
    }
  },
  created() {
    if(!this.$route.params.from){
      service.logout();
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

  mounted() {
    this.getProduct()
  },

  methods: {
    getImgUrl(pic) {
        return require('../../assets/'+pic)
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
        this.$alert("Pesananmu telah kami terima","Success","success").then(res=> {
          if(res == true){
            this.$router.push({name: "SuccessPage", params:{ from: "SuccessPage" }})
          }
        });
    
      })
    },

    deleteMultipleData(){
      for(var i = 0;i < this.list.length; i++){
        if(this.list){
          service.delete("keranjangs", this.list[i].id).then(res =>{
            this.getProduct();
          }) 
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
               })
            }
            else {
              this.getProduct();
            }
          })
    },

    onEdit(data){
      data.jumlah_pemesanan = parseInt(data.jumlah_pemesanan)
      service.delete("keranjangs", data.id).then(response => {
        service.add("keranjangs", data).then(response =>{
          this.getProduct();
        })
      });
        
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