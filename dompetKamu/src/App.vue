<template> 
	<div class="app">
		<my-header/>
    	<div class="page-wraper">
    		<router-view  />
    	</div>
    	<my-footer/>
    </div>
</template>

<script>
import MyHeader from '@/components/header'
import MyFooter from '@/components/footer'

export default {
  name: 'App',
  components:{
  	MyHeader,
  	MyFooter
  }
}
</script>

<style>

</style>
