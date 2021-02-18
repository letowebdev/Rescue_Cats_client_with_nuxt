<template>
  <!-- <div> -->
    <!-- Start Filters -->
    <!-- <section>
      <div class="container">
        <form @submit.prevent="search">
          <div class="filters d-flex justify-content-between">
            <ul class="">
              <div class="dropdown">
                <select
                  v-model="filters.orderBy"
                  class="custom-select"
                  style="width: 200px;"
                  @change="search"
                >
                  <option value="latest">Latest First</option>
                  <option value="likes">Most Liked First</option>
                </select>
              </div>
            </ul>

            <div class="d-flex align-items-center">
              <div class=" mr-3 custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="hasComments"
                  true-value="1"
                  false-value="0"
                  v-model="filters.has_comments"
                />
                <label class="custom-control-label" for="hasComments">Has Comments</label>
              </div>

              <div>
                <div class="input-group mb-0">
                  <input
                    type="text"
                    class="form-control"
                    v-model="filters.q"
                    placeholder="Search..."
                  />
                  <div>
                    <button
                      :disabled="searching"
                      class="btn rounded bg-primary ml-2 text-white"
                      type="submit"
                    >
                      <span v-show="searching">
                        <i class="fas fa-spinner fa-spin"></i>
                      </span>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section> -->
    <!-- End Filters -->

    <!-- <section class="cards-block">
      <div class="container">
        <div class="row"> -->
          <!-- <base-design v-for="design in designs" :key="design.id" :design="design"></base-design> -->
        <!-- </div>
      </div>
    </section>
  </div> -->

<form @submit.prevent="search">
  <div class="row">
        <div class="col-md-3">
            <div class="card">
                <div class="card-header">Add filters to your search</div>
                <div class="card-body">
                    <!-- Most liked -->
                        <div class="dropdown">
                            <select
                            v-model="filters.orderBy"
                            class="custom-select"
                            @change="search"
                            >
                            <option value="latest">Latest First</option>
                            <option value="likes">Most Liked First</option>
                            </select>
                        </div>
                    <hr>
                    <!-- By Comments -->
                    <ul>
                        <li class="custom-checkbox">
                            <input
                            type="checkbox"
                            class="custom-control-input"
                            id="hasComments"
                            true-value="1"
                            false-value="0"
                            v-model="filters.has_comments"
                            @change="search"
                            />
                            <label class="custom-control-label" for="hasComments">Has Comments</label>
                        </li>  
                    </ul>
                </div>
            </div>
        </div>


      <div class="col-md-9">
         <div class="card">
              <div class="card-header">
              What would you like to search?
          </div>
         <div class="input-group card-body">
            <input type="text" 
            class="form-control rounded mr-2" 
            placeholder="Search" 
            aria-describedby="search-addon"
            v-model="filters.q"
            />
            <button
                :disabled="searching"
                class="btn rounded bg-primary ml-2 text-white"
                type="submit">
                <span v-show="searching">
                <i class="fas fa-spinner fa-spin"></i>
                </span>
                Search
            </button>
            </div>
         </div>

         <div class="card mt-4 border-info">
           <div class="card-body" >
              <base-post v-for="post in posts" :key="post.id" :post="post"></base-post>
           </div>

         </div>

      </div>
   

  </div>
</form>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      searching: false,
      filters: {
        has_comments: 0,
        q: '',
        orderBy: 'likes'
      }
    };
  },
  computed: {
    queryString() {
      return Object.keys(this.filters)
        .map(k => `${k}=${this.filters[k]}`)
        .join('&');
    }
  },
  methods: {
    search() {
      this.searching = true;
      this.$axios
        .$get(`/search/posts?${this.queryString}`)
        .then(res => (this.posts = res.data))
        .catch(e => console.log(e))
        .finally(() => (this.searching = false));
    }
  },
  beforeMount() {
    this.search();
  }
};
</script>
