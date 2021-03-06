<template>
  <layout page-title="Login">
    <form @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating" >Nom utilisateur</ion-label>  
                <ion-input v-model="inputTitle" type="text" /> 
            </ion-item>    

            <ion-item>
                <ion-label position="floating" >Mot de passe</ion-label>  
                <ion-input v-model="inputImg" type="url" /> 
            </ion-item>
        </ion-list>

        <ion-button type="submit" expand="full" color="success" >Save</ion-button>
    </form>
  </layout>
</template>


<script>
import Layout from "@/components/Layout.vue";
import {IonLabel, IonList, IonItem, IonButton, IonInput} from '@ionic/vue';

export default {
  components: { Layout, IonLabel, IonList, IonItem, IonButton, IonInput },
};
</script>