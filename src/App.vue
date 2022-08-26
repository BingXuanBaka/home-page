<template>
  <back-ground></back-ground>
  <page-home :title=title :subTitle=subTitle :links=links />
  <page-description :description="description" />
  <page-friend-link :friendLinks="friendLinks"/>
  <page-footer :footerContent="footerContent" />
</template>

<script>


import PageHome from './pages/PageHome.vue'
import PageDescription from './pages/PageDescription.vue'
import PageFriendLink from './pages/PageFriendLink.vue'
import PageFooter from './pages/PageFooter.vue'

import BackGround from './components/BackGround.vue'


export default {
  name: 'App',
  components: {
    PageHome,
    PageDescription,
    PageFriendLink,
    PageFooter,
    BackGround
  },


  data (){
    return{
      title : '好的，这里是冰轩',
      subTitle : '只是一只死废物',
      blurTitle : 'shhh... let\'s not leak our hard work',
      links : [
        {
          index : 0,
          name : 'Github',
          href : 'https://github.com/BingXuanOwO',
          description : '全球最大同性交流网站（bushi）'
        },
        {
          index: 1,
          name: 'BiliBili',
          href: 'https://space.bilibili.com/286707275/',
          description: '一个我也不知道什么时候才会更一期新视频的地方'
        },
        {
          index: 2,
          name: '网易云音乐',
          href: 'https://music.163.com/#/user/home?id=1320983215',
          description: '网 抑 云 阴 乐（bushi）'
        }
      ],
      opacity : 0,
      description : [
          '好的，这里是冰轩，一只14岁的死废物',
          '目前我只会超级垃圾的前端，入门级别的C#，特别烂的视频剪辑和mg动画制作...然后就没了。',
          '接下来嘛...我也不知道该说些什么了xwx',
          '总之...我就是个死废物（）'
      ],
      friendLinks : [
        {
          title:'凯莫·琼小羽',
          url:'https://k.catkai.net/',
          imageUrl:'https://s2.loli.net/2022/05/20/UiM9JeSusCDR4Fd.jpg',
        },
        {
          title:'某猫的个人Blog',
          url:'https://blog.moumao.top/',
        },
      ]
      ,
      footerContent : [
        {
          content : '冰轩OwO@2022',
          href : 'https://www.bing-xuan.xyz'
        },
        {
          content : 'Powered by Vue',
        }
      ]
    }

  },
  methods:{
    onFocus(){
      document.title = this.title;
    },
    onBlur(){
      document.title = this.blurTitle;
    }
  },
  mounted(){
    document.title = this.title;
    if(this.blurTitle != '') {
      window.addEventListener("blur", this.onBlur);
    }

    window.addEventListener("focus",this.onFocus);
  }
}
  setInterval(() => {

  },100)

</script>

<style>
body{
  background: #494949;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #edf8ff;

}

.flex-column{
  display: flex;
  flex-direction: column;
}
.child-center{
  justify-content: center;
  align-items: center;
}

</style>
