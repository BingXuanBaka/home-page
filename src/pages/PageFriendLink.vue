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
        padding: 5px 0;
        flex-wrap: wrap;
        gap:10px
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
        border-radius: 50px;
        height: 35px;
        position: relative;
    }
    #p-links ul li span{
        transition: .3s;
        opacity: .8;
    }
    #p-links ul li:hover span{
        opacity: 1;
    }
    #p-links ul li::after{
        content: "";
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 50px;
        position: absolute;
        background: #607082;
        opacity: .2;
        transition: .3s;
    }
    #p-links ul li:hover::after{
        opacity: .4;
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