<template>
  <div>
    <SiteNavigation></SiteNavigation>
    <div class="container mt-4">
      <nuxt />
    </div>
  </div>
</template>

<script>
import SiteNavigation from './partials/navigation'
export default {
  components:{
    SiteNavigation
  }
}
</script>
