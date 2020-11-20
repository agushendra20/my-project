<template>
<div class="col-md-12 row">
	<table class="table">
		<thead style="border:solid;text-align:left">
			<tr>
				<th>#</th>
				<th style="width:300px">Foto</th>
				<th style="widht:180px">Makanan</th>
				<th style="widht:180px">Keterangan</th>
				<th class="text-center">Jumlah</th>
				<th class="text-center">Harga</th>
				<th class="text-center">Total Harga</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody class="text-left" style="border-bottom:solid">
			<tr v-for="(item,index) in list" :key="item.id">
				<td>{{index + 1}}</td>
				<td>
					<img :src="getImgUrl(item.gambar)" class="image-keranjang">
					</td>
					<td>
						<b>{{item.nama}}</b>
					</td>
					<td><textarea v-model="item.keterangan" rows="5"></textarea></td>
					<td class="text-center"><input type="number" v-model="item.jumlah_pemesanan"></td>
					<td class="text-right">Rp. {{formatPrice(item.harga)}}</td>
					<td class="text-right">Rp. {{formatPrice(calculatedItem(item.jumlah_pemesanan,item.harga))}}</td>
					<td class="text-center">
						<i class="fa fa-remove" @click="onDelete(item.id)" style="font-size:24px;color:red"></i>
						<i class="fa fa-edit" @click="onEdit(item)" style="font-size:24px;color:#42b983"></i>
					</td>
				</tr>
			</tbody>
			<tr>
				<td colspan="5"></td>
				<td class="text-right" style="font-weight:bold">Total Harga</td>
				<td class="text-right" style="font-weight:bold">Rp. {{formatPrice(calculatedTotalItem())}}</td>
			</tr>
			<tbody></tbody>
		</table>
		<div class="mt-2 mb-2 col-md-12">
			<form @submit.prevent="handleSubmit" class="col-md-12 row text-left">
				<div class="col-md-8"></div>
				<div class="col-md-4">
				<div class="padding-top-15">
					<div style="font-weight:bold">Nama</div>
					<div><b-form-input v-model="nama" class="form-control col-md-12" required></b-form-input></div>
				</div>
				<div class="padding-top-15">
					<div style="font-weight:bold">Nomor Meja</div>
					<div><b-form-input v-model="noMeja" class="form-control col-md-12" required></b-form-input></div>
				</div>
				 <div style="padding-top:15px;">
                	 <b-button variant="success" type="submit" style="font-weight:100;">
                  		<i class="fa fa-shopping-cart" style="padding-right:10px"></i>Pesan
                	</b-button>
            	</div>
				</div>
			
			</form>
		</div>
	</div>
</template>

<script src="./keranjangDetail.js"></script>

<style scoped>
  @import  '../style.css';
</style>
