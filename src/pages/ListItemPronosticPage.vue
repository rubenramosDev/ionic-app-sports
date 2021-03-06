<template>
  <ion-item :router-link="`/detail-pronostics`">
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ pronostic.name }}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        {{ pronostic.analyse }}
      </ion-card-content>
    </ion-card>
  </ion-item>
</template>

<script>
import {IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/vue';

export default {
  components:{IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent},
  props: ["pronostic"],
};
</script>
