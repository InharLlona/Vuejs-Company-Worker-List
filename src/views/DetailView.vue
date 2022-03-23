<template>
  <div class="detail">
    <h3>{{worker.login}}</h3>
    <img :src="worker.avatar_url">
    <div v-for="(value,key) in worker">
       <div id="dt">
       <span><b>{{key}}</b> : {{value}}}</span>
       </div>
    </div>
  </div>
</template>
<script lang="ts">

import {defineComponent} from 'vue'
import {getDetail} from "../services/workers"
import {wrkrDet} from "../projectTypes/pTypes"
export default defineComponent ({
 
data () {
    return{
      workerLogin: "",
      worker: {} as wrkrDet
    }
},
async created (){
       this.workerLogin = String(this.$route.params.data)
       this.worker = await getDetail(this.workerLogin)
    }
})
</script>
<style>
.dt{
    display: flex;
}
</style>