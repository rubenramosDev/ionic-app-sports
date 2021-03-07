<template>
  <ion-item v-if="this.user == undefined">
    <ion-label class="ion-text-wrap">
      <ion-text color="primary">
        <h3>{{ pronostic.name }}</h3>
      </ion-text>
      <p>{{ pronostic.type }}</p>
      <ion-text color="secondary">
        <p>{{ pronostic.competition }}</p>
      </ion-text>
      <div v-if="this.user == undefined">
        <div v-if="this.user == undefined">
          <ion-button :router-link="`/login`"
            >Log in required <ion-icon :icon="lockClosed"></ion-icon
          ></ion-button>
        </div>
      </div>
    </ion-label>
  </ion-item>

  <ion-item
    v-else
    :router-link="`/detail-pronostics/${pronostic.id}/${pronostic.name}/${pronostic.cote}/${pronostic.res_prono}/${pronostic.resultat}/${pronostic.competition}/${pronostic.type}/${pronostic.analyse}`"
  >
    <ion-label class="ion-text-wrap">
      <ion-text color="primary">
        <h3>{{ pronostic.name }}</h3>
      </ion-text>
      <p>{{ pronostic.type }}</p>
      <ion-text color="secondary">
        <p>{{ pronostic.competition }}</p>
      </ion-text>
      <h5>Correct login as : {{ this.user }}</h5>
    </ion-label>
  </ion-item>
</template>

<script>
import { lockClosed } from "ionicons/icons";
import { IonItem, IonLabel, IonText, IonIcon, IonButton } from "@ionic/vue";

export default {
  data() {
    return {
      lockClosed,
      flag: false,
    };
  },
  components: { IonItem, IonLabel, IonText, IonIcon, IonButton },
  props: ["pronostic"],
  computed: {
    user() {
      let user = this.$store.getters.user;
      return user;
    },
  },
};
</script>
