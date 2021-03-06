<template>
  <layout page-title="Admin - List of pronostics">
    <template v-slot:actions-right>

      <ion-button shape="round" fill="outline" router-link="/adm-add-pronostic">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>

    </template>

    <ion-list>
      <ion-item
          v-for="item in pronostics"
          :key="item.id">
        {{ item.name }}
        <ion-button slot="end" type="submit" color="success" :router-link="`/adm-detail-pronostic/${item.id}`">
          <ion-icon :icon="eyeOutline"></ion-icon>
        </ion-button>
      </ion-item>
    </ion-list>
  </layout>
</template>

<script>
import {IonButton, IonIcon,IonList} from "@ionic/vue";
import {add, eyeOutline} from "ionicons/icons";
import {IonItem} from "@ionic/vue";

import Layout from "../../components/Layout.vue";

export default {
  data() {
    return {
      add,
      eyeOutline
    };
  },
  components: {
    Layout,
    IonList,
    IonButton,
    IonIcon,
    IonItem,
  },
  computed: {
    pronostics() {
      return this.$store.getters.pronostics;
    },
  },
  created() {
    this.$store.dispatch("getAllPronostics");
  },
};
</script>
