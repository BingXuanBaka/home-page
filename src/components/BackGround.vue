<template>
  <div id="document-background" :style="{opacity:BackGroundOpacity}"></div>
</template>

<script>
export default {
  name: "BackGround",
  data(){
    return{
      BackGroundOpacity: 1,
      scrollTop:0
    }

  },
  methods:{
    OnScroll(){
      this.scrollTop=document.documentElement.scrollTop / window.innerHeight ;
      // this.OverlayStyle.opacity = this.scrollTop > 0.4 ? 0.4 : this.scrollTop;
      this.BackGroundOpacity = this.scrollTop > 0.4 ? 0.4 : 1 - this.scrollTop;
    }
  },
  mounted(){
    window.addEventListener("scroll", this.OnScroll);
  },
  beforeUnmount(){
    window.removeEventListener("scroll" , this.OnScroll);
  }
}


</script>
<style scoped>
  #document-background{
    background:linear-gradient(to bottom right,#003e5a,#004125);
    z-index: -1;
    position: fixed;
    left: 0;
    top:0;
    height: 100vh;
    width: 100vw;
  }
</style>