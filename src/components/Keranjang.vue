<template>
<div style="padding-bottom:20px;">
	<div class="home" style="margin-left:25px;margin-right:25px;">
		<div class="row pl-15 pr-15" style="padding-top:20px;">
			<div class="col-md-12 text-left">
				<div style="font-weight: 100;font-size: 30px;">Keranjang 
					<span style="font-weight:bold">Saya</span>
				</div>
			</div>
			<detail></detail>
		</div>
	</div>
</div>
</template>

<script>

import service from '@/service.js'
import detail from './../components/keranjangdetail/KeranjangDetail.vue'
export default {
  name: 'keranjang',
     components: {
      detail
  }
}
</script>

<style scoped>
  @import  './style.css';
</style>
