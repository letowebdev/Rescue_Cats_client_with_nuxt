<template>
<div>
    <div class="card-header">
        <h4><a :href="`/post/${post.slug}`">{{post.title}}</a></h4> 
    </div>
    <div class="row">
        <div class="col-md-4">
            <div>
                <img width="200" :src="post.images.thumbnail" />
            </div>
        </div>
        <div class="col-md-8">
            <p>{{post.body}}</p>
            <hr>
                    <div class="ml-1 text-left flex-1">
                        <ul class="font-12 fw-400 list-inline text-light-gray">
                        <li class="pt-0 list-inline-item">
                            <i class="fas fa-thumbs-up"></i>
                            {{ post.likes_count }}
                        </li>
                        <li class="pt-0 list-inline-item">
                            <i class="fas fa-comments"></i>
                            {{ post.comments_count }}
                        </li>
                        </ul>
                </div>
            <hr class="bg-info">
            <div>
                <h6 class="text-info">Published {{post.created_at}}</h6>
                <div class="row">
                    <img style=" border-radius: 50%;" class="ml-3" width="25" :src="post.user.image_url" />
                    <h6 class="text-info ml-2">Posted by {{post.user.name}}</h6>

                </div>
            </div>
        </div>
    </div>
    <hr class="bg-info">
</div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },

    }
    
}
</script>