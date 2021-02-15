<template>
  <div>
    <h1>Create a new account</h1>
    <hr>
      <form @submit.prevent="submit">
        <alert-success :form="form">
          You have created your account successfully
        </alert-success>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Full Names</label>
        <input type="text" name="name" class="form-control" v-model.trim="form.name"
        :class="{ 'is-invalid': form.errors.has('name') }">
        <has-error :form="form" field="name"></has-error>

      </div>
       <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Username</label>
        <input type="text" name="username" class="form-control" v-model.trim="form.username"
         :class="{ 'is-invalid': form.errors.has('username') }">
        <has-error :form="form" field="username"></has-error>
      </div>

       <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" name="email" class="form-control" v-model.trim="form.email"
        :class="{ 'is-invalid': form.errors.has('email') }">
        <has-error :form="form" field="email"></has-error>
      
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label" >Password</label>
        <input type="password" name="password" class="form-control" v-model.trim="form.password"
        :class="{ 'is-invalid': form.errors.has('password') }">
        <has-error :form="form" field="password"></has-error>

      </div>
       <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
        <input type="password" name="password_confirmation" class="form-control" v-model.trim="form.password_confirmation">
      </div>
  
      <button type="submit" class="btn btn-primary" :disabled="form.busy">
        <span v-if="form.busy">
        <i class="fas fa-spinner fa-spin"></i>
        </span>
        Register
      </button>
      <hr class="bg-info">
      <p>Already have an account?
        <nuxt-link :to="{name: 'login'}">Login</nuxt-link>
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
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    }
  },

  methods: {
    submit() {
      this.form
      .post(`/auth/register`)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error) 
      })
    }
  },

}
</script>