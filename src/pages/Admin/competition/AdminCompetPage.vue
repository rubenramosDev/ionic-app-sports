<template>
  <layout page-title="Admin - List of competitons">
    <template v-slot:actions-right>
      <ion-button shape="round" fill="outline" router-link="/adm-compet-add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>

    <ion-list>
      <ion-item v-for="item in pronostics" :key="item.id">
        {{ item.competition }}
        <ion-button
          shape="round"
          slot="end"
          type="submit"
          color="danger"
          @click="deleteCompetition(item.id)"
        >
          <ion-icon :icon="trashOutline"></ion-icon>
        </ion-button>
      </ion-item>
    </ion-list>
  </layout>
</template>

<script>
import { add, trashOutline } from "ionicons/icons";
import { IonItem, IonButton, IonIcon, IonList, toastController} from "@ionic/vue";

import Layout from "../../../components/Layout.vue";
import axios from "axios";

export default {
  data() {
    return {
      add,
      trashOutline,
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
      return this.$store.getters.pronosticsCompetitions;
    },
  },
  created() {
    this.$store.dispatch("getAllCompetitions");
  },
  methods: {
    deleteCompetition(id) {
      axios.delete("http://raxk1131.odns.fr/competitions/" + id).then(
        (response) => {
          console.log(response);
          this.toast("Deleted ! Refresh page");
        },
        (error) => {
          console.log(error);
          this.toast("Ups ! Something went wrong");
        }
      );
    },
    async toast(text) {
      const toast = await toastController.create({
        message: text,
        duration: 4000,
      });
      await toast.present();
    },
  },
};
</script>
