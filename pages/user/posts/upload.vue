<template>
    <div>
    <section class="hero text-center bg-secondary text-white">
      <div class="container">
        <h1 class="font-28 fw-600 text-uppercase">
         Add a post
        </h1>
      </div>
    </section>
    <ImageUpload> </ImageUpload>
    
    </div>
</template>

<script>
import ImageUpload from '@/components/image/ImageUpload.vue';
export default {

  components: {
    'ImageUpload': ImageUpload
  },

  data() {
    return {
      
    } 
  },

  methods: {
    
  },

};
</script>