<template>
    <div>
    <div class="container">
      <div class="row">
        <!-- LEFT -->
        <div class="col-sm-3">
          <ul class="list-group">

            <nuxt-link
              v-for="link in links"
              :key="link.route"
              :to="{ name: link.route}"
              class="list-group-item list-group-item-action"
            >
              {{ link.title }}
            </nuxt-link>

          </ul>
        </div>

        <!-- RIGHT -->
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
        <!-- END RIGHT -->
      </div>
    </div>
    <!-- END CONTAINER -->
  </div>
</template>

<script>
export default {
middleware: ['auth'],
  data() {
    return {
      links: [
        { title: 'Dashboard', route: 'settings.dashboard', class: 'active' },
        { title: 'Update Profile', route: 'settings.profile' },
        { title: 'posts', route: 'settings.posts' }
      ],
    };
  }
}
</script>

<style>
/* Bootstrap Over right */
.dropdown-menu {
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    overflow: hidden;
    border: none;
}
.dropdown-item.active,
.dropdown-item:active {
    background-color: transparent;
    color: #3f4257;
}
</style>