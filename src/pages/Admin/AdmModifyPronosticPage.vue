<template>
  <layout page-title="Adm - Modify pronostic">
    <form @submit.prevent="update">
      <ion-list>
        <ion-item>
          <ion-label position="floating"
            >Title - {{ this.pronosticName }}</ion-label
          >
          <ion-input v-model="inputTitle" type="text"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Types</ion-label>
          <ion-select placeholder="Select a type" v-model="inputType">
            <ion-select-option v-for="type in types" :key="type.id"
              >{{ type.libelle }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Competition</ion-label>
          <ion-select placeholder="Select a compet" v-model="inputCompetition">
            <ion-select-option v-for="compet in competitions" :key="compet.id"
              >{{ compet.competition }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label position="floating"
            >Cost - {{ this.pronosticCote }}</ion-label
          >
          <ion-input v-model="inputCost" type="text"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Analyse</ion-label>
          <ion-textarea cols="5" v-model="inputAnalyse"></ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label position="floating"
            >Resultat - {{ this.pronosticResultat }}</ion-label
          >
          <ion-input v-model="inputResultat" type="text"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Prono</ion-label>
          <ion-select placeholder="Select a compet" v-model="inputResprono">
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
      pronosticName: this.$route.params.name,
      pronosticTypeId: this.$route.params.typeId,
      pronosticCompetitionId: this.$route.params.competitionId,
      pronosticAnalyse: this.$route.params.analyse,
      pronosticCote: this.$route.params.cote,
      pronosticResultat: this.$route.params.resultat,
      pronosticResProno: this.$route.params.res_prono,
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
          name: this.inputTitle,
          typeId: this.inputType,
          competitionId: this.inputCompetition,
          analyse: this.inputAnalyse,
          cote: this.inputCost,
          resultat: this.inputResultat,
          res_prono: this.inputResprono,
        })
        .then(
          () => {
            this.toast(`Pronostic updated ! Refresh page`); 
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