<template>
  <div>
    <h1>Login to your account</h1>
    <hr>
      <form @submit.prevent="submit">
       <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" name="email" class="form-control"  v-model.trim="form.email"
         :class="{ 'is-invalid': form.errors.has('email') }">
        <has-error :form="form" field="email"></has-error>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input name="password" type="password" class="form-control"  v-model.trim="form.password"
         :class="{ 'is-invalid': form.errors.has('password') }">
        <has-error :form="form" field="password"></has-error>
      </div>
  
     <button type="submit" class="btn btn-primary" :disabled="form.busy">
        <span v-if="form.busy">
        <i class="fas fa-spinner fa-spin"></i>
        </span>
        Login
      </button>
       <hr class="bg-info">
      <p>Dont't have an account?
        <nuxt-link :to="{name: 'register'}">Register</nuxt-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  middleware: ['guest'],

    data () {
    return {
      form: this.$vform({
        email: '',
        password: '',
      })
    }
  },

  methods: {
    submit() {
      this.$auth.loginWith('local', {
        data: this.form
      }).then(res => {
        console.log(res)
      }).catch(e => {
        this.form.errors.set(e.response.data)
      })
    }
  },

  
}
</script>