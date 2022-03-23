
<template>
  <div class="home">
  <h3>Would you like to know who is working where?</h3>
  <h4>We are checking {{company}}</h4>
  <Stext @chcompany="chCompany"/>
  <Sbutton @search="onSearch"/>
  <Slist :lista="list" />  
  </div>
</template>

<script lang="ts">

import { defineComponent, Ref, ref, onMounted } from "vue"
import Stext from "../components/companySearch.vue"
import Sbutton from "../components/shearchButton.vue"
import Slist from "../components/workerList.vue"
import {getWorkers} from "../services/workers"
import {wrkrList} from "../projectTypes/pTypes"

export default defineComponent({

  components : {
    Stext,
    Sbutton,
    Slist
  },

  setup(){
    
    let list : Ref<wrkrList[]> = ref([])
    let company : Ref<string>  = ref("")
  
    const onSearch = async () => {
      localStorage.setItem('company',company.value)
      list.value = await getWorkers(company.value)
    }
     
    const chCompany  = (cp:string) => {
      company.value = cp
      console.log(company)
      return company
    }

    onMounted( async () => {
      var cmpn = localStorage.getItem('company') 
      if (cmpn) {
      company.value = cmpn
      list.value = await getWorkers(cmpn)
      }
    })

    return {list,onSearch,chCompany,company}
   }
  
  }
)
</script>
<style></style>
