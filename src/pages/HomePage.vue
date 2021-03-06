<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Pronostics</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <form @submit.prevent="submitForm">
        <ion-list>
          <ion-item>
            <ion-label>Type</ion-label>
            <ion-select placeholder="Select a pronostic" v-model="type">
              <ion-select-option
                v-for="item in pronostics"
                :key="item.id"
                v-bind:value="item.id"
                >{{ item.libelle }}</ion-select-option
              >
            </ion-select>
          </ion-item>
        </ion-list>

        <div class="ion-text-center">
          <ion-button type="submit" color="primary"
            >Voir les pronostics</ion-button
          >
        </div>
      </form>

      <div class="ion-text-center">
        <ion-button type="submit" color="success" @click="login()"
          >Se connecter</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      type: "",
    };
  },
  components: {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    IonButton,
    IonSelectOption,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    submitForm() {
      console.log("hey");
      console.log(this.type);
    },
    login() {
      this.$router.push("/login");
    },
  },
  computed: {
    pronostics() {
      return this.$store.state.types;
    },
  },
  created() {
    this.$store.dispatch("getAllTypes");
  },
};
</script>