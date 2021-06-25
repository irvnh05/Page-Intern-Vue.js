<template>

  <div>
     <!-- <IndexIntern/> -->
  <!-- navbar -->
  <NavbarIntern/>
  <!-- carousel -->
  <HeaderOprec/>
  <!-- Content -->
  <ContentOprec/>
  <!-- Sosmed -->
  <SosmedIntern/> 
  <!-- footer -->
  <FooterIntern/>
  </div>


</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavbarIntern from '@/components/NavbarIntern.vue'
import HeaderOprec from '@/components/HeaderOprec.vue'
import ContentOprec from '@/components/ContentOprec.vue'
import SosmedIntern from '@/components/SosmedIntern.vue'
import FooterIntern from '@/components/FooterIntern.vue'
// import IndexIntern from '@/components/IndexIntern.vue'

export default {
  name: 'Oprec',
  components: {
    NavbarIntern,
    HeaderOprec,
    ContentOprec,
    SosmedIntern,
    FooterIntern,
    // IndexIntern,
  }
}
</script>
<style src="../assets/css/app.css">

</style>
