<template>
    <div>
        <p>{{item.id}}</p>
        <p>{{item.title}}</p>
        <p>{{item.desc}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item:this.$route.params
        }
    },
}
</script>