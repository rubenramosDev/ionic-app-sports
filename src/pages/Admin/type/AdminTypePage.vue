<template>
  <layout page-title="Admin - List of types">
    <template v-slot:actions-right>
      <ion-button shape="round" fill="outline" router-link="/adm-type-add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>

    <ion-list>
      <ion-item v-for="item in types" :key="item.id">
        {{ item.libelle }}

        <ion-button
            @click='deleteType(item.id)'
            shape="round"
            slot="end"
            color="danger">
          <ion-icon :icon="trashOutline"></ion-icon>
        </ion-button>
      </ion-item>
    </ion-list>
  </layout>
</template>

<script>
import {add, trashOutline} from "ionicons/icons";
import {IonItem, IonButton, IonIcon, IonList} from "@ionic/vue";

import Layout from "../../../components/Layout.vue";
import axios from "axios";

export default {
  data() {
    return {
      add,
      trashOutline
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
    types() {
      return this.$store.getters.pronosticsTypes;
    },
  },
  created() {
    this.$store.dispatch("getAllTypes");
  },
  methods: {
    deleteType(id) {
      console.log(id);
      axios.delete("http://raxk1131.odns.fr/type/" + id)
          .then(response => {
            console.log(response);
          });
    }
  },
};
</script>
