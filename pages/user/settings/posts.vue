<template>
  <div>
    <div class="setting-title font-16 fw-500">Posts</div>

    <div class="card-body white-bg-color">
      <table class="table table-striped">
        <thead>
          <tr>
            <td></td>
            <td>Title</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>
              <div v-if="post.images">
                <img :src="post.images.thumbnail" width="100" />
              </div>
            </td>
            <td>{{ post.title }}</td>
            <td>{{ post.is_live ? 'Published' : 'Draft' }}</td>
            <td>
              <nuxt-link
                :to="{ name: 'update-post', params: { id: post.id } }"
              >
                Edit
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      posts: []
    };
  },
  methods: {
    async fetchUserPosts() {
      const { data } = await this.$axios.$get(
        `/users/${this.$auth.user.id}/posts`
      );
      this.posts = data;
    }
  },
  created() {
    this.fetchUserPosts();
  }
};
</script>
