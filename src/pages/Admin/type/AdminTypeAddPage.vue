<template>
  <layout page-title="Add new type">
    <form @submit.prevent="submitForm">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Type</ion-label>
          <ion-input v-model="inputType" type="text"/>
        </ion-item>
        <ion-button type="submit" expand="full" color="success">Add</ion-button>
      </ion-list>
    </form>
  </layout>
</template>


<script>
import Layout from "../../../components/Layout.vue";
import {IonLabel, IonList, IonItem, IonButton, IonInput} from "@ionic/vue";
import axios from "axios";

export default {
  data() {
    return {
      inputType: ""
    }
  },
  components: {Layout, IonLabel, IonList, IonItem, IonButton, IonInput,},
  methods: {
    submitForm() {
      console.log(this.inputType);
      let h = {
        "type": this.inputType
      }
      axios.post("https://raxk1131.odns.fr/type", h)
          .then(response => {
            console.log(response);
          }).catch(err => {
        console.log(err);
      });

    }
  }
};
</script>