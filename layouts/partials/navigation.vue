<template>
  <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Rescue Cats</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <nuxt-link class="nav-link" :to="{name: 'index'}">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Users</a>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{name: 'add-post'}" >Add Post</nuxt-link>
            </li>
          <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
          </form>
          </ul>

          <ul class="navbar-nav float-right">
          <template v-if="! $auth.loggedIn">
            <li class="nav-item">
              <nuxt-link class="nav-link"  :to="{name: 'register'}">Register</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link"  :to="{name: 'login'}">Login</nuxt-link>
            </li>
              </template>
              <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

      

          <template v-if="$auth.loggedIn">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Hi {{$auth.user.username}}</em>
          </template>
          <b-dropdown-item disabled><i class="fas fa-user-circle"></i> YOUR ACCOUNT</b-dropdown-item>
          <hr>
          <nuxt-link class="dropdown-item" to="/settings/dashboard"><i class="fas fa-tachometer-alt"></i> Dashboard</nuxt-link>
          <nuxt-link class="dropdown-item"  :to="{name: 'settings.profile'}"><i class="fas fa-user"></i> Profile</nuxt-link>
          <a class="dropdown-item" href="#"><i class="fas fa-cogs"></i> Settings</a>
          <hr>
          <b-dropdown-item href="#" @click.prevent="logout"> <i class="fas fa-lock"></i> Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
          </template>
      </b-navbar-nav>

          </ul>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
};
</script>

<style></style>
