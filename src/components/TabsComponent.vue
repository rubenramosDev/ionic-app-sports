<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="home" href="/admin/home">
          <ion-icon :icon="home"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="pronostics" href="/admin/pronostics">
          <ion-icon :icon="barChartOutline"></ion-icon>
          <ion-label>Pronostics</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="types" href="/admin/types">
          <ion-icon :icon="americanFootballOutline"></ion-icon>
          <ion-label>Types</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="competitions" href="/admin/competitions">
          <ion-icon :icon="easelOutline"></ion-icon>
          <ion-label>Competitions</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="account" href="/admin/account">
          <ion-icon :icon="personOutline"></ion-icon>
          <ion-label>Account</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonPage, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue'
import { home, list, personCircle, americanFootballOutline, barChartOutline, easelOutline, personOutline} from "ionicons/icons";

export default {
  data() {
    return {
      home,
      list,
      personCircle,
      americanFootballOutline,
      barChartOutline,
      easelOutline,
      personOutline
    }
  },
  components: {
    IonPage,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon
  }
}
</script>