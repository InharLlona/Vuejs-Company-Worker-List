<template>
    <div>
       <input type="text" v-model="company" placeholder="Company name"  @keyup="chcompany"/>
    </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent ({
  data () {
    return{
      company:"",
    }
  },
  methods : {
        chcompany () : void {
        this.$emit('chcompany',this.company)
        }
    },
})
</script>

<style>
  input{
    margin-top: 5px;
  }
</style>