<template>
  <layout page-title="Account">
    <ion-list>
      <ion-item>Log in as Admin </ion-item>
    </ion-list>
    <ion-button type="submit" expand="full" color="danger" @click="logout()"
      >Log out</ion-button
    >
  </layout>
</template>


<script>
import Layout from "@/components/Layout.vue";
import { IonList, IonItem, IonButton, toastController } from "@ionic/vue";

export default {
  components: { Layout, IonList, IonItem, IonButton },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.toast("Login out...");
      this.$router.push("/home");
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