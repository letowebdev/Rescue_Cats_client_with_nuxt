<template>
  <div>
    <div class="cart-header font-16 fw-500">Profile</div>

    <div class="cart-body white-bg-color">
      <form class="custom-form" @submit.prevent="update">
        <div class="row">
          <div class="col-md-6">
            <alert-success :form="form">Profile information updated successfully</alert-success>

             <div class="form-group">
                <input class="form-control form-control-lg font-14 fw-300"
                :form="form" 
                type="string" 
                name="name" 
                field="name"
                v-model.trim="form.name"
                placeholder="Full name"
                :class="{ 'is-invalid': form.errors.has('name') }">
                <has-error :form="form" field="name"></has-error>
            </div>
           
            <div class="form-group">
                <input class="form-control form-control-lg font-14 fw-300" 
                :form="form"
                type="string" 
                name="tagline" 
                field="tagline"
                v-model="form.tagline"
                placeholder="Tagline"
                :class="{ 'is-invalid': form.errors.has('tagline') }">
                <has-error :form="form" field="tagline"></has-error>
            </div>

            <div class="form-group">
                <input class="form-control form-control-lg font-14 fw-300" 
                :form="form"
                type="string" 
                name="formatted_address" 
                field="formatted_address"
                v-model="form.formatted_address"
                placeholder="Write your address"
                :class="{ 'is-invalid': form.errors.has('formatted_address') }">
                <has-error :form="form" field="formatted_address"></has-error>
            </div>

            <div class="form-group">
                  <textarea  class="form-control form-control-lg font-14 fw-300" 
                  :form="form"
                  name="about" cols="30" rows="3"  
                  placeholder="Write something about you" 
                 field="about"
                 v-model="form.about"
                 :class="{ 'is-invalid': form.errors.has('about') }"/>
                    <has-error :form="form" field="about"></has-error>
                </div>

            <div class="form-group custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="available_to_hire"
                v-model="form.available_to_hire"
              />
              <label
                class="custom-control-label"
                :value="true"
                for="available_to_hire"
              >Available to hire?</label>
            </div>

            <div class="text-right">
               <button type="submit" class="btn btn-primary" :disabled="form.busy">
                    <span v-if="form.busy">
                    <i class="fas fa-spinner fa-spin"></i>
                    </span>
                    Update Profile
                </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$vform({
        name: '',
        about: '',
        tagline: '',
        formatted_address: '',
        available_to_hire: false
      })
    };
  },
  methods: {
    update() {
      this.form
        .put(`/auth/settings/profile`)
        .then(res => console.log(res))
        .catch(e => console.log(e));
    },
  },
  mounted() {
    Object.keys(this.form).forEach(k => {
      if (this.$auth.user.hasOwnProperty(k)) {
        this.form[k] = this.$auth.user[k];
      }
    });
  }
};
</script>