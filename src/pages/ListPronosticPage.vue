<template>
  <layout page-title="List of pronostics">
    <ion-list>
      <pronostic-list-item
        v-for="item in pronostics"
        :key="item.id"
        :pronostic="item"
      />
    </ion-list>
  </layout>
</template>

<script>
import { IonList } from "@ionic/vue";
import Layout from "../components/Layout";
import PronosticListItem from "./ListItemPronosticPage";

export default {
  components: {
    Layout,
    IonList,
    PronosticListItem,
  },
  computed: {
    pronostics() {
      return this.$store.getters.pronosticsBySport;
    },
  },
  created() {
    this.$store.dispatch("getPronosticByCategory");
  },
};
</script>
