<template>
  <layout page-title="Pronostic detail">
    <ion-card>
      <img src="https://www.rankonesport.com/content/Images/hero-bg.jpg" />
      <ion-card-header>
        <ion-card-subtitle>
          {{ this.pronosticCompetition }} |
          {{ this.pronosticType }}</ion-card-subtitle
        >
        <ion-card-title>{{ this.pronosticName }}</ion-card-title>
        <ion-card-title>Cost - ${{ this.pronosticCote }}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        {{ this.pronosticAnalyse }}
      </ion-card-content>
    </ion-card>
    <ion-card-title> Pronostic result : </ion-card-title>
    <ion-card-subtitle> {{ this.pronosticResultat }} </ion-card-subtitle>
    <hr />
    <ion-card-title> Pronostic :</ion-card-title>
    <ion-chip>
      <ion-label color="primary">{{ this.pronosticResprono }}</ion-label>
    </ion-chip>
  </layout>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonChip,
  IonLabel,
} from "@ionic/vue";
import Layout from "@/components/Layout.vue";

export default {
  components: {
    Layout,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonChip,
    IonLabel,
  },
  data() {
    return {
      pronosticId: this.$route.params.id,
      pronosticName: this.$route.params.name,
      pronosticCote: this.$route.params.cote,
      pronosticResprono: this.$route.params.resprono,
      pronosticResultat: this.$route.params.resultat,
      pronosticCompetition: this.$route.params.competition,
      pronosticType: this.$route.params.type,
      pronosticAnalyse: this.$route.params.analyse,
    };
  },
  created() {
    console.log("hola 2");
    return this.$store.dispatch("getPronosticById", this.pronosticId);
  },
  watch: {
    $route(currentRoute) {
      this.pronosticId = currentRoute.params.id;
    },
  },
};
</script>
