<template>
  <layout page-title="Add new pronostic">
    <form @submit.prevent="submitForm">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Title</ion-label>
          <ion-input v-model="inputTitle" type="text"/>
        </ion-item>

        <ion-item>
          <ion-label>Type</ion-label>
          <ion-select placeholder="Select" v-model="inputType">
            <ion-select-option v-for="item in types" :key="item.id" v-bind:value="item.id">{{
                item.libelle
              }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Competition</ion-label>
          <ion-select placeholder="Select" v-model="inputCompetition">
            <ion-select-option v-for="item in competitions" :key="item.id" v-bind:value="item.id">{{
                item.competition
              }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Prono</ion-label>
          <ion-select placeholder="Select" v-model="inputProno">
            <ion-select-option value="1">1</ion-select-option>
            <ion-select-option value="N">N</ion-select-option>
            <ion-select-option value="2">2</ion-select-option>
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

      <ion-button type="submit" expand="full" color="success">Add</ion-button>
    </form>
  </layout>
</template>


<script>
import Layout from "@/components/Layout.vue";
import {
  IonLabel, IonSelectOption, IonSelect, IonList, IonItem, IonButton, IonInput, IonTextarea,
} from "@ionic/vue";
import axios from "axios";

export default {

  data() {
    return {
      inputTitle: "", inputType: "", inputCompetition: "", inputCost: "", inputAnalyse: "", inputProno: "", flag: false
    }
  },
  components: {
    Layout, IonSelect, IonSelectOption, IonLabel, IonList, IonItem, IonButton, IonInput, IonTextarea,
  },
  computed: {
    competitions() {
      return this.$store.state.competitions;
    },
    types() {
      return this.$store.state.types;
    },

  },
  created() {
    this.$store.dispatch("getAllTypes"),
        this.$store.dispatch("getAllCompetitions");
  },
  methods: {
    submitForm() {
      console.log("hey");
      let data =
          {
            "name": this.inputTitle,
            "typeId": this.inputType,
            "competitionId": this.inputCompetition,
            "analyse": this.inputAnalyse,
            "cote": this.inputCost,
            "resultat": this.inputAnalyse,
            "res_prono": this.inputProno
          };
      console.log(data);
      axios.post("http://raxk1131.odns.fr/pronostics/", data)
          .then(response => {
            this.flag = true;
            console.log(this.flag);
            console.log(response);
          });
    }
  }
}
</script>