<template>
    <div>
        <div class="test" @click="$router.go(-1)">点击返回</div>
        <div @click="$router.push('/schoolTest')">去下一页</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="">
    
</style>