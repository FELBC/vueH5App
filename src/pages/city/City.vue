<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name:'City',
  components:{
    CityHeader,
    CitySearch
  },
  data() {
    return {
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods: {
    getCityInfo(){
      axios.get('/api/city').then(res=>{
        if(res.data.ret && res.data.data){
          let {cities,hotCities} = res.data.data;
          this.cities = cities;
          this.hotCities = hotCities;
        }
      });
    }
  },
  mounted() {
    this.getCityInfo();
  }
}
</script>
<style lang="stylus" scoped>
  
</style>