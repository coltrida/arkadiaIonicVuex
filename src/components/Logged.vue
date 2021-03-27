<template>
    <ion-button routerLink="/presenze-attivita" expand="full">Presenze Attività</ion-button>
    <ion-button routerLink="/presenzeOperatore" expand="full">Presenze Operatore</ion-button>
    <ion-button routerLink="/viaggi" expand="full">Inserisci Km</ion-button>
    <ion-button routerLink="/vetture" expand="full">Vetture</ion-button>
    <ion-button routerLink="/operatori" expand="full">Operatori</ion-button>
    <ion-button routerLink="/ragazzi" expand="full">Ragazzi</ion-button>
    <ion-button routerLink="/attivita" expand="full">Attività</ion-button>
    <ion-button routerLink="/statistiche" expand="full">Statistiche</ion-button>
    <ion-button routerLink="/associa-e-log" expand="full">Associa e Log</ion-button>
</template>

<script>
import {IonButton} from '@ionic/vue';
export default {
    components: {
        IonButton
    },
}
</script>