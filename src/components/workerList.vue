<template>
  <ul>
    <li v-for="worker in lista" :key="worker.id" @click="dtnavigate($event)">
    {{worker.login}}
       <router-link :to="{ name: 'detail', params: { data: worker.login}}">
        <div id="wrkContainer">
          <img :src="worker.avatar_url">{{worker.login}}
        </div>
       </router-link> 
    </li>
  </ul>
</template>

<script lang="ts">

import { defineComponent, PropType } from "vue";
import { wrkrList } from "../projectTypes/pTypes";

export default defineComponent({
  components :{},
  props : {
      lista : {
        type: Object as PropType<wrkrList[]>,
        required: true,
      },
  },
  methods : {
        dtnavigate (event:any) {
        this.$emit('dtnavigate',event)
        }
    },
})
</script>

<style> 
  img{
    width:100px;
    height:100px;
    margin:10px
  }

  .wrkContainer{
    display: flex;
    align-items: center;
    align-content: center;
  }
</style>