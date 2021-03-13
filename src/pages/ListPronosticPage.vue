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
  data() {
    return {
      categoryId: this.$route.params.id,
    };
  },
  computed: {
    pronostics() {
      return this.$store.getters.pronosticsBySport;
    },
  },
  created() {
    console.log("smn");
    this.$store.dispatch("getPronosticByCategory", this.categoryId);
  },
  watch: {
    $route(currentRoute) {
      this.categoryId = currentRoute.params.id;
    },
  },
};
</script>
