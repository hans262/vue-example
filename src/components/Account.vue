<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store'

const { currentUser } = storeToRefs(useMainStore())

</script>
<template>
  <div class="account">
    <h3>{{ currentUser?.username }}</h3>
  </div>
</template>
