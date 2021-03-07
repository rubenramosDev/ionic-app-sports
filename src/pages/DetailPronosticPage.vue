<template>
  <layout page-title="Pronostic detail">
    <ion-card>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Serge_Gainsbourg_par_Claude_Truong-Ngoc_1981.jpg/290px-Serge_Gainsbourg_par_Claude_Truong-Ngoc_1981.jpg"
      />
      <ion-card-header>
        <!--  <ion-card-title>{{ hola.name }}</ion-card-title> -->
        <ion-card-subtitle>{{ hola.type }}</ion-card-subtitle> 
      </ion-card-header>

      <ion-card-content>
        <!-- {{ hola.analyse }} -->
      </ion-card-content>
    </ion-card>
  </layout>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
} from "@ionic/vue";
import Layout from "@/components/Layout.vue";

export default {
  components: {
    Layout,
    IonCard,
    IonCardHeader,
    IonCardContent,
  },
  data() {
    return {
      pronosticId: this.$route.params.id,
    };
  },
  computed: {
    hola() {
      return this.$store.getters.pronosticById;
    },
  },
  created() {
    this.$store.dispatch("getPronosticById", this.pronosticId);
  },
  watch: {
    $route(currentRoute) {
      this.pronosticId = currentRoute.params.id;
    },
  },
};
</script>
