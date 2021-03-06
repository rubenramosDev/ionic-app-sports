<template>
  <layout page-title="Account">
    <form @submit.prevent="submitForm">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Nom utilisateur</ion-label>
          <ion-input v-model="inputTitle" type="text"/>
        </ion-item>

      </ion-list>
      <ion-button type="submit" expand="full" color="danger">Log out</ion-button>
    </form>
  </layout>
</template>


<script>
import Layout from "@/components/Layout.vue";
import {IonLabel, IonList, IonItem, IonButton, IonInput} from '@ionic/vue';

export default {
  components: {Layout, IonLabel, IonList, IonItem, IonButton, IonInput},
};
</script>