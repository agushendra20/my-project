<template>
<div class="bg-lightgray best-food-padding">
  <div class="home mr-7 ml-7">
    <div class="row pl-15 pr-15 mt-2 mb-2">
        <div class="col-md-6">
          <h1 class="header">Best <b>Foods</b></h1>
        </div>
        <div class="col-md-6 text-right">
             <b-button variant="success" v-on:click="onRouter()" style="font-weight:100;">Lihat Semua</b-button>
        </div>
    </div>
    <div class="row pl-15 pr-15">
      <div class="col-md-3" v-for="item in list" :key="item.id" style="padding-top:15px;padding-bottom:15px">
         <b-card>
           <div>
               <img :src="getImgUrl(item.gambar)" class="image-gallery">
           </div>
           <div style="padding: 10px;text-align: left;">
              <div class="font-weight-100">{{item.nama}}</div>
              <div class="font-weight-100">Harga: Rp. {{formatPrice(item.harga)}}</div>
              <div style="padding-top:15px">
                <b-button variant="success" class="font-weight-100" v-on:click="onOrderItem(item)">
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

<script src="./bestfood.js"></script>

<style scoped>
@import  '../style.css';
</style>
