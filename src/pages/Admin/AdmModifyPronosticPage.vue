<template>
  <layout page-title="Adm - Modify pronostic">
    <form @submit.prevent="submitForm">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Title</ion-label>
          <ion-input v-model="inputTitle" type="text"/>
        </ion-item>

        <ion-item>
          <ion-label>Type</ion-label>
          <ion-select placeholder="Select a type">
            <ion-select-option v-for="item in pronostics" :key="item.id">{{
                item.type
              }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Compet</ion-label>
          <ion-select placeholder="Select a compet">
            <ion-select-option v-for="item in pronostics" :key="item.id">{{
                item.type
              }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Cost</ion-label>
          <ion-input v-model="inputCost" type="text"/>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Analyse</ion-label>
          <ion-textarea cols="5" v-model="inputAnalyse"></ion-textarea>
        </ion-item>
      </ion-list>

      <ion-button type="submit" expand="full" color="warning">
        Modify
        <ion-icon :icon="saveOutline"></ion-icon>
      </ion-button>
    </form>
  </layout>
</template>


<script>
import Layout from "@/components/Layout.vue";
import {
  IonLabel, IonSelectOption, IonSelect, IonList, IonItem, IonButton, IonInput, IonTextarea,
} from "@ionic/vue";
import {saveOutline} from "ionicons/icons";

export default {
  data() {
    return {
      pronosticId: this.$route.params.id,
      saveOutline
    };
  },
  components: {
    Layout, IonSelect, IonSelectOption, IonLabel, IonList, IonItem, IonButton, IonInput, IonTextarea,
  },
  computed: {
    pronostics() {
      return this.$store.getters.pronostics;
    },
    loadPronostic() {
      return this.$store.getters.pronosticId(this.pronosticId);
    },
  },
  created() {
    this.$store.dispatch("getPronosticsCategories");
  },
  watch: {
    $route(currentRoute) {
      this.pronosticId = currentRoute.params.id;
    },
  },
};
</script>