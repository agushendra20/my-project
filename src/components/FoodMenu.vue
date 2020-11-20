<template>
<div class="bg-lightgray" style="padding-bottom:20px;">
  <div class="home" style="margin-left:70px;margin-right:70px;">
    <div class="row pl-15 pr-15" style="padding-top:20px;">
        <div class="col-md-12">
          <h1 class="header" style="margin-top: 0px !important;font-weight:100;">Daftar <span style="font-weight:bold">Makanan</span></h1>
        </div>
        <div class="col-md-12" style="padding-top:15px;">
         <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
             <b-form-input v-model="searchData" class="form-control" placeholder="Search"  @input="searchMenu()"></b-form-input>
         </div>
        </div>
    </div>
    <div class="row pl-15 pr-15" style="margin-top:25px;">
      <div class="col-md-3" style="margin-bottom:25px" v-for="item in list" :key="item.id">
         <b-card>
           <div>
               <img :src="getImgUrl(item.gambar)" class="image-gallery">
           </div>
           <div style="padding: 10px;text-align: left;">
              <div style="font-weight: 100;">{{item.nama}}</div>
              <div style="font-weight: 100;">Harga: Rp. {{formatPrice(item.harga)}}</div>
              <div style="padding-top:15px">
                <b-button variant="success" style="font-weight:100;" v-on:click="onOrderItem(item)">
                  <i class="fa fa-shopping-cart" style="padding-right:10px"></i>Pesan
                </b-button>
                </div>
           </div>
         </b-card>
      </div>
    </div>
  </div>
</div>
</template>

<script src="./foodmenu.js"></script>

<style scoped>
  @import  './style.css';
</style>
