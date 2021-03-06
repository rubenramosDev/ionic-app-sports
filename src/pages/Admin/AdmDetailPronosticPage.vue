<template>
  <layout page-title="Adm - Pronostic detail">
    <ion-card>
      <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Serge_Gainsbourg_par_Claude_Truong-Ngoc_1981.jpg/290px-Serge_Gainsbourg_par_Claude_Truong-Ngoc_1981.jpg"
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
    <ion-button expand="full" color="warning" @click="() => router.push(`/adm-modify-pronostic/${loadPronostic.id}`)">
      Edit
      <ion-icon :icon="createOutline"></ion-icon>
    </ion-button>
    <ion-button type="submit" expand="full" color="danger">
      Delete
      <ion-icon :icon="trashOutline"></ion-icon>
    </ion-button>
  </layout>
</template>

<script>
import {IonCard, IonCardHeader, IonCardContent, IonGrid, IonRow, IonCol} from "@ionic/vue";
import {createOutline, trashOutline} from "ionicons/icons";

import Layout from "@/components/Layout.vue";
import {useRouter} from "vue-router";

export default {
  data() {
    return {
      pronosticId: this.$route.params.id,
      createOutline,
      trashOutline
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
    return {router};
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
};
</script>
