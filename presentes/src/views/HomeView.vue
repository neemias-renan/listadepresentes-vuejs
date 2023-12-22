<template>
    <TheHeader></TheHeader>
    <ContainerItems></ContainerItems>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import ContainerItems from '@/components/ContainerItems.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    ContainerItems,
  }
}
</script>