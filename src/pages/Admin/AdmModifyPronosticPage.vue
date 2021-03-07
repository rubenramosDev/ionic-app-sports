<template>
  <layout page-title="Adm - Modify pronostic">
    <form @submit.prevent="submitForm">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Title</ion-label>
          <ion-input v-model="inputTitle" type="text">{{
            selectedComp.name
          }}</ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Types</ion-label>
          <ion-select placeholder="Select a type" v-model="type">
            <ion-select-option v-for="type in types" :key="type.id"
              >{{ type.libelle }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Competition</ion-label>
          <ion-select placeholder="Select a compet" v-model="competition">
            <ion-select-option v-for="compet in competitions" :key="compet.id"
              >{{ compet.competition }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Cost</ion-label>
          <ion-input v-model="inputCost" type="text">{{
            selectedComp.cote
          }}</ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Analyse</ion-label>
          <ion-textarea cols="5" v-model="inputAnalyse">{{
            selectedComp.analyse
          }}</ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Resultat</ion-label>
          <ion-input v-model="resultat" type="text">{{
            selectedComp.resultat
          }}</ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Prono</ion-label>
          <ion-select placeholder="Select a compet" v-model="res_prono">
            <ion-select-option value="0">0</ion-select-option>
            <ion-select-option value="1">1</ion-select-option>
            <ion-select-option value="N">N</ion-select-option>
          </ion-select>
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
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonList,
  IonItem,
  IonButton,
  IonInput,
  IonTextarea,
  toastController,
} from "@ionic/vue";
import { saveOutline } from "ionicons/icons";
import axios from "axios";

export default {
  data() {
    return {
      pronosticId: this.$route.params.id,
      saveOutline,
    };
  },
  components: {
    Layout,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonList,
    IonItem,
    IonButton,
    IonInput,
    IonTextarea,
  },
  methods: {
    update() {
      axios
        .put(`http://raxk1131.odns.fr/pronostics/${this.pronosticId}`, {
          id: this.pronosticId,
          name: this.inputLogin,
          typeId: this.type,
          competitionId: this.competition,
          analyse: this.analyse,
          cote: this.inputCost,
          resultat: this.resultat,
          res_prono: this.res_prono,
        })
        .then(
          () => {
            this.toast(`Pronostic updated !`);
            this.$router.push(`adm-detail-pronostic/${this.pronosticId}`);
          },
          () => {
            this.toast("Ups ! Something went wrong");
            this.$router.push(`adm-detail-pronostic/${this.pronosticId}`);
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
  computed: {
    types() {
      return this.$store.getters.pronosticsTypes;
    },
    competitions() {
      return this.$store.getters.pronosticsCompetitions;
    },
    selectedComp() {
      return this.$store.getters.pronosticById;
    },
  },
  created() {
    this.$store.dispatch("getAllTypes"),
      this.$store.dispatch("getAllCompetitions"),
      this.$store.dispatch("getPronosticById", this.pronosticId);
  },
  watch: {
    $route(currentRoute) {
      this.pronosticId = currentRoute.params.id;
    },
  },
};
</script>