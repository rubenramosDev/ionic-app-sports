<template>
  <layout page-title="Add new competition">
    <form @submit.prevent="submitForm">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Competiton</ion-label>
          <ion-input v-model="inputCompetition" type="text" />
        </ion-item>
        <ion-button type="submit" expand="full" color="success"
          >Save</ion-button
        >
      </ion-list>
    </form>
  </layout>
</template>

<script>
import Layout from "../../../components/Layout.vue";
import {
  IonLabel,
  IonList,
  IonItem,
  IonButton,
  IonInput,
  toastController,
} from "@ionic/vue";
import axios from "axios";

export default {
  data() {
    return {
      inputCompetition: "",
    };
  },
  components: {
    Layout,
    IonLabel,
    IonList,
    IonItem,
    IonButton,
    IonInput,
  },
  methods: {
    submitForm() {
      console.log(this.inputCompetition);
      let h = {
        competition: this.inputCompetition,
      };
      axios.post("https://raxk1131.odns.fr/competitions", h).then(
        () => {
          this.toast("Deleted ! Refresh page");
          this.$router.push("/admin/competitions");
        },
        () => {
          this.toast("Ups ! Something went wrong");
          this.$router.push("/admin/competitions");
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