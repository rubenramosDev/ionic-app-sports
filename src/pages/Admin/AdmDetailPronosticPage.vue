<template>
  <layout page-title="Adm - Pronostic detail">
    <ion-card>
      <img
        src="https://webunwto.s3.eu-west-1.amazonaws.com/2020-01/sport-congresse.jpg"
      />
      <ion-card-header>
        <ion-card-title>{{ loadPronostic.name }}</ion-card-title>
        <ion-card-subtitle>{{ loadPronostic.type }}</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        {{ loadPronostic.analyse }}
      </ion-card-content>
    </ion-card>

    <ion-grid>
      <ion-row>
        <ion-col>1</ion-col>
        <ion-col>N</ion-col>
        <ion-col>2</ion-col>
      </ion-row>
    </ion-grid>
    <ion-button
      expand="full"
      color="warning"
      @click="() => router.push(`/adm-modify-pronostic/${loadPronostic.id}`)"
    >
      Edit
      <ion-icon :icon="createOutline"></ion-icon>
    </ion-button>
    <ion-button
      type="submit"
      expand="full"
      color="danger"
      @click="deleteProno()"
    >
      Delete
      <ion-icon :icon="trashOutline"></ion-icon>
    </ion-button>
  </layout>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  toastController,
} from "@ionic/vue";
import { createOutline, trashOutline } from "ionicons/icons";

import Layout from "@/components/Layout.vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  data() {
    return {
      pronosticId: this.$route.params.id,
      createOutline,
      trashOutline,
    };
  },
  components: {
    Layout,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  computed: {
    loadPronostic() {
      return this.$store.getters.pronosticId(this.pronosticId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.pronosticId = currentRoute.params.id;
    },
  },
  methods: {
    deleteProno() {
      axios
        .delete(`http://raxk1131.odns.fr/pronostics/${this.pronosticId}`)
        .then(
          () => {
            this.toast(`Pronostic deleted !`);
            this.$router.push(`/admin/pronostics`);
          },
          () => {
            this.toast("Ups ! Something went wrong");
            this.$router.push(`/admin/pronostics`);
          }
        );
    },
    async toast(text) {
      const toast = await toastController.create({
        message: text,
        duration: 3000,
      });
      await toast.present();
    },
  },
};
</script>
