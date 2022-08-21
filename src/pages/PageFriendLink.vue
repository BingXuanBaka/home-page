<template>
    <div id="p-links" class="hide">
        <h2>友情链接</h2>
        <ul>
            <a v-for="link in friendLinks" :key="link.id" :href="link.url">
                <li>
                    <img v-if="link.imageUrl" :src="link.imageUrl"/>
                    <span>{{ link.title }}</span>
                </li>
            </a>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        friendLinks:Array
    },
    methods:{
        OnScroll(){
            if(this.$el.offsetTop - this.$el.scrollTop < document.documentElement.scrollTop + window.innerHeight - 100){
                setInterval(()=>{this.$el.className="shown";},50)
            }
        }
    },
    mounted(){
        window.addEventListener("scroll", this.OnScroll);

    },
    beforeUnmount(){
        window.removeEventListener("scroll", this.OnScroll);
    }
}
</script>
<style>
    #p-links{
        margin: 30px 5vw;
        transition: 0.5s;
    }
    #p-links ul{
        display: flex;
        padding: 5px;
        flex-wrap: wrap;
    }
    .hide{
        opacity: 0;
        transform: translateY(100px);
    }
    .shown{
        opacity: 1;
        transform: translateY(0px);
    }
    #p-links ul a{
        text-decoration: none;
        color: #edf8ff;
    }
    #p-links ul li{
        display: flex;
        padding: 5px;
        background: rgb(92, 100, 108);
        border-radius: 50px;
        height: 35px;
        
    }
    #p-links ul li span{
        line-height: 35px;
        padding: 0 4px;
    }
    #p-links ul li img{
        height: 35px;
        width: 35px;
        border-radius: 50%;
    }
</style>