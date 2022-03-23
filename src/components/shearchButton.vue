<template>
    <div>
        <button type="button" @click="search">Search</button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent ({
    methods : {
        search () : void {
        this.$emit('search')
        }
    },
})
</script>

<style> 
    button{
        margin:5px
    }
</style>