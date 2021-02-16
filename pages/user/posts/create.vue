<template>
   <div>
    <!-- Start Hero -->
    <section class="hero text-center bg-secondary mb-4 text-white">
      <div class="container">
        <h1 class="font-28 fw-600 text-uppercase">
          Add Your Post Information
        </h1>
      </div>
    </section>
    <!-- End Hero -->

    <!-- Create Shot -->
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body p-1"  v-if="post.images">
             <img :src="post.images.large" class="w-100 mb-4" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="submit">
                <alert-success :form="form">
                  Post successfully Created
                </alert-success>
                <div class="form-group">
                    <input class="form-control form-control-lg font-14 fw-300" 
                    type="string" 
                    name="title" 
                    field="title"
                    v-model.trim="form.title"
                    placeholder="Enter a title"
                    :class="{ 'is-invalid': form.errors.has('title') }">
                    <has-error :form="form" field="title"></has-error>
                </div>
                <div class="form-group">
                  <textarea  class="form-control form-control-lg font-14 fw-300" 
                  name="body" cols="30" rows="3"  
                  placeholder="Write your post" 
                  field="body"
                  v-model.trim="form.body"
                 :class="{ 'is-invalid': form.errors.has('body') }"/>
                    <has-error :form="form" field="body"></has-error>
                </div>
                <div class="form-group">
                  <client-only>
                    <better-input-tag
                      :tags="form.tags"
                      placeholder="Tags separated by commas"
                      on-paste-delimiter=","
                    :class="{ 'is-invalid': form.errors.has('tags') }">
                    </better-input-tag>
                    <has-error :form="form" field="tags"></has-error>
                  </client-only>
                </div>
                <div class="form-group custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="is_live"
                    v-model="form.is_live"
                  />
                  <label
                    class="custom-control-label"
                    value="true"
                    for="is_live"
                  >
                    Publish this post
                  </label>
                </div>

                <div class="text-right">
                  <!-- <nuxt-link :to="{ name: 'settings.posts' }"
                    >Cancel</nuxt-link
                  > -->
                    <button type="submit" class="btn btn-primary" :disabled="form.busy">
                        <span v-if="form.busy">
                        <i class="fas fa-spinner fa-spin"></i>
                        </span>
                        Create Post
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Create Shot -->
  </div>
</template>

<script>
import BetterInputTag from 'better-vue-input-tag';
export default {
  middleware: ['auth'], 
  components: {
    BetterInputTag
  },
  data() {
    return {
      form: this.$vform({
        title: '',
        body: '',
        is_live: false,
        tags: [],
      })
    };
  },
  async asyncData({ $axios, params, error, redirect }) {
    try {
      const post = await $axios.$get(`posts/${params.id}/user`);
      return { post: post.data};
    } catch (err) {
      if (err.response.status === 404) {
        error({ statusCode: 404, message: 'Post not found' });
      } else if (err.response.status === 401) {
        redirect('/login');
      } else {
        error({ statusCode: 500, message: 'Internal server error' });
      }
    }
  },
  methods: {
    submit() {
      this.form
        .put(`/posts/${this.$route.params.id}`)
        .then(res => {
          setTimeout(() => {
            this.$router.push({ name: 'settings.dashboard' });
          }, 1000);
        })
        .catch(err => console.log(err.response));
    }
  },
  mounted() {
    if (this.post) {
      Object.keys(this.form).forEach(key => {
        if (this.post.hasOwnProperty(key)) {
          this.form[key] = this.post[key];
        }
      });
      this.form.tags = this.post.tag_list.tags || [];
    }
  }
};
</script>