<template>
<div style="padding-bottom:20px;">
  <div class="home mrl-50">
    <form @submit.prevent="onCart()">
    <div class="row pl-15 pr-15" style="margin-top:50px;">
        <div class="col-md-6" style="padding-right:0px">
             <img :src="getAssets.gambar" style="width:550px">
        </div>
        <div class="col-md-6" style="padding-left:0px;text-align:left;">
            <h1 style="font-weight:bold;font-size:36px;text-align:left;">{{data.nama}}</h1>
            <div style="text-align: left;">
              <span style="font-weight:400;font-size:24px">Harga</span>
              <span style="padding-left:5px;font-weight:bold;font-size:26px;">Rp. {{formatPrice(data.harga)}}</span>
            </div>
            <div style="padding-top:15px;">
                <label style="font-weight:100;">Jumlah Pesan</label>
                  <b-form-input type="number" min="1" step="1" required class="form-control" v-model="data.jumlah_pemesanan"></b-form-input>
            </div>    
             <div style="padding-top:15px;">
                <label style="font-weight:100;">Keterangan</label>
                  <b-form-textarea type="text" rows="3" class="form-control" v-model="data.keterangan"></b-form-textarea>
            </div>
            <div style="padding-top:15px;">
                 <b-button variant="success" type="submit" style="font-weight:100;">
                  <i class="fa fa-shopping-cart" style="padding-right:10px"></i>Pesan<span v-if="data.jumlah_pemesanan"> Rp.  {{formatPrice(calculatedItem(data.jumlah_pemesanan,data.harga))}}</span>
                </b-button>
            </div>
        </div>
    </div>
    </form>
  </div>
</div>
</template>

<script src="./foodorderdetail.js"></script>

<style scoped>
  @import  '../style.css';
</style>
