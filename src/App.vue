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
      subTitle : '10000%的废物，0%的成功。',
      blurTitle : 'shhh... let\'s not leak our hard work',
      links : [
        {
          index : 0,
          name : 'Blog',
          href : 'https://blog.bing-xuan.cn',
          description : '我也不知道什么时候才会更新的blog'
        },
        {
          index : 1,
          name : 'Github',
          href : 'https://github.com/BingXuanOwO',
          description : '全球最大同性交流网站（bushi）'
        },
        {
          index: 2,
          name: 'BiliBili',
          href: 'https://space.bilibili.com/286707275/',
          description: '一个我也不知道什么时候才会更一期新视频的地方'
        },
        {
          index: 3,
          name: '网易云音乐',
          href: 'https://music.163.com/#/user/home?id=1320983215',
          description: '网 抑 云 阴 乐（bushi）'
        }
      ],
      opacity : 0,
      description : [
          '好的，这里是冰轩...',
          '一只废物。',
      ],
      friendLinks : [
        {
          title:'凯莫·琼小羽',
          url:'https://k.catkai.net/',
          imageUrl:'https://s2.loli.net/2022/05/20/UiM9JeSusCDR4Fd.jpg',
          description:'',
        },
        {
          title:'某猫的个人Blog',
          url:'https://blog.moumao.top/',
          description:'',
        },
        {
          title:'Allenyou’s Blog',
          url:'https://www.allenyou.wang/',
          imageUrl:'https://avatar.sourcegcdn.com/avatar/59b2fbdd507a84fe181b0af3e4ad7be3',
          description:'稻花香里说丰年，听取WA声一片',
        },
        {
          title:'迷失的小K',
          url:'http://www.kclub.fun/',
          imageUrl:'https://cdn.kclub.fun/wp-content/uploads/2022/08/1660213171-colorful.jpg',
          description:'Just for fun',
        },
        {
          title:'歪皮',
          url:'https://www.gene-yp.com/',
          imageUrl:'https://pic.gene-yp.com/i/2022/07/25/c2axpo.jpeg',
          description:'Just love, understanding and positivity',
        },
        {
          title:'Foxhole',
          url:'https://blog.southfox.me/',
          imageUrl:'https://blog.southfox.me/favicon.png',
          description:'',
        },
        {
          title:'FurLibrary',
          url:'https://www.furrybbs.net/',
          description:'',
        },
        {
          title:'中二病晚期の物語',
          url:'https://imfurry.com',
          imageUrl:'https://cdn-imfurry.imfurry.com/avatar/zebwqFurryAvatar.png',
          description:'一只狐狸敲出的一个奇迹',
        },
        
      ]
      ,
      footerContent : [
        {
          content : '冰轩OwO@2022',
          href : 'https://www.bing-xuan.cn'
        },
        {
          content : '萌ICP备20223354号',
          href : 'https://icp.gov.moe/?keyword=20223354'
        }
      ],
      time:new Date(),
      isNewYear:false,
      remainTime:0,
      fireworks:[]
    }

  },
  methods:{
    onFocus(){
      document.title = this.title;
    },
    onBlur(){
      document.title = this.blurTitle;
    },
  },
  mounted(){
    document.title = this.title;
    if(this.blurTitle != '') {
      window.addEventListener("blur", this.onBlur);
    }

    window.addEventListener("focus",this.onFocus);
  }

}


</script>

<style>

body{
  background-color: #070707;

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
