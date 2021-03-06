<template>
  <layout page-title="Pronostic detail">
    <ion-card>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Serge_Gainsbourg_par_Claude_Truong-Ngoc_1981.jpg/290px-Serge_Gainsbourg_par_Claude_Truong-Ngoc_1981.jpg"
      />
      <ion-card-header>
        <!-- <ion-card-title>{{ pronostic.name }}</ion-card-title> -->
        <!-- //   <ion-card-subtitle>{{ item.type }}</ion-card-subtitle> -->
      </ion-card-header>

      <ion-card-content>
        <!-- {{ item.analyse }} -->
      </ion-card-content>
    </ion-card>
  </layout>
</template>

<script>
import {IonCard, IonCardHeader, IonCardContent} from '@ionic/vue';
import Layout from "@/components/Layout.vue";

export default {
  components: { Layout, IonCard, IonCardHeader, IonCardContent},
  computed: {
    pronostic() {
      return this.$store.getters.pronostic;
    },
  },
  created() {
    this.$store.dispatch("getPronosticById");
    let x = this.$store.getters.pronosticById;
    console.log(x);
  },
};
</script>
