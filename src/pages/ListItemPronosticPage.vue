<template>
  <ion-item :router-link="`/detail-pronostics/${pronostic.id}`">
    <ion-label class="ion-text-wrap">
      <ion-text color="primary">
        <h3>{{ pronostic.name }}</h3>
      </ion-text>
      <p>{{ pronostic.type }}</p>
      <ion-text color="secondary">
        <p>{{ pronostic.competition }}</p>
      </ion-text>
      <ion-icon :icon="lockClosed"></ion-icon>
    </ion-label>
  </ion-item>
</template>

<script>
import { lockClosed } from "ionicons/icons";
import { IonItem, IonLabel, IonText } from "@ionic/vue";

export default {
  data() {
    return {
      lockClosed,
    };
  },
  components: { IonItem, IonLabel, IonText },
  props: ["pronostic"],
  computed: {
    user() {
      return this.$store.getters.user;
    },
    created() {
      console.log(this.user);
      return null;
    },
  },
};
</script>
