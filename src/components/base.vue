<template>
    <div class="base">
        <router-view></router-view>
        <div class="footer">
            <div class="item" @click="$router.push('/index')">
                <img src="@/assets/home_icon_home_sel.png" alt="">
                <p>首页</p>
            </div>
            <div class="item" @click="$router.push('/schoolTest')">
                <img src="@/assets/home_icon_home_sel.png" alt="">
                <p>课程</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
.base {
    /* width:100%;
    height:100%; */
}
    .footer {
        display: flex;
    }

    .item {
        flex: 1;
    }
</style>