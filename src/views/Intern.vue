<template>

  <div class="home">
     <!-- <IndexIntern/> -->
  <!-- navbar -->
  <NavbarIntern/>
  <!-- carousel -->
  <HeaderIntern/>
  <!-- Content -->
  <ContentIntern/>
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
import HeaderIntern from '@/components/HeaderIntern.vue'
import ContentIntern from '@/components/ContentIntern.vue'
import SosmedIntern from '@/components/SosmedIntern.vue'
import FooterIntern from '@/components/FooterIntern.vue'
// import IndexIntern from '@/components/IndexIntern.vue'

export default {
  name: 'Intern',
  components: {
    NavbarIntern,
    HeaderIntern,
    ContentIntern,
    SosmedIntern,
    FooterIntern,
    // IndexIntern,
  }
}
</script>
<style src="../assets/css/app.css">

</style>
