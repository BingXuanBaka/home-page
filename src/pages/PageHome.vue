<template>
  <article id="p-home" class="flex-column child-center">
    <img src="../assets/logo.png" alt="LOGO">
    <h1 class="middle">{{ title }}</h1>
    <span>{{ subTitle }}</span>
    <nav class="links">
      <a v-for="link in links" :key=link.index :href=link.href :title="link.description">
        {{ link.name }}
      </a>
    </nav>
  </article>
</template>

<script>
export default {
  name: "PageHome",
  props:{
    title : String,
    subTitle : String,
    links : Array
  }
}



</script>

<style scoped>

#p-home{
  height: calc(100vh - 26px);
  padding-bottom: 10px;
  animation:p-home-shown 0.25s;
}
@keyframes p-home-shown {
  from{
    opacity: 0;
    transform: translateY(50px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}
#p-home img{
  height: 155px;
  width: 155px;
  border-radius: 50%;
  position: relative;
}
#p-home span{
  margin: 0 20px 35px;
  opacity: .5;
}
#p-home .links a{
  padding: 8px 14px;
  border-radius: 13px;
  margin: 3px;
  position: relative;
  color: #fff;
  opacity: .5;
  text-decoration: none ;
}
#p-home .links a:after{
  content: "";
  background: #556e89;
  opacity: .1;
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 13px;
  transition: 0.3s;
}
#p-home .links a:hover:after{
  opacity: .2;
  border-radius: 7px;
}
#p-home .links a:hover{
  opacity: .7;
  border-radius: 7px;
}
</style>