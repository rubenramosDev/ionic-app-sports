<template>
  <layout page-title="Login">
    <form @submit.prevent="submitForm">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Nom utilisateur</ion-label>
          <ion-input v-model="inputLogin" type="text" />
        </ion-item>

        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input v-model="inputPassword" type="password" />
        </ion-item>
      </ion-list>

      <ion-button type="submit" expand="full" color="success">Login</ion-button>
    </form>
  </layout>
</template>


<script>
import Layout from "@/components/Layout.vue";
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
  components: { Layout, IonLabel, IonList, IonItem, IonButton, IonInput },
  methods: {
    async submitForm() {
      axios
        .post("http://raxk1131.odns.fr/login", {
          username: this.inputLogin,
          password: this.inputPassword,
        })
        .then(
          (response) => {
            let type = response.data.user_type;
            this.toast(`Correct credentials, login as ${type}`);

            if (!type.localeCompare("admin")) {
              this.$router.push("/admin/home");
              this.$store.dispatch("settingUser", type);
            } else {
              this.$router.push("/login");
              this.$store.dispatch("settingUser", type);
            }
          },
          (error) => {
            console.log(error);
            this.toast("Wrong credentials");
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
};
</script>