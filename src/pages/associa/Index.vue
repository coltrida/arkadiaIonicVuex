<template>
    <master-layout pageTitle="Attività">
        <ion-button routerLink="/attivita-ragazzo" expand="full">Associa Attività - Ragazzo</ion-button>
        <ion-button routerLink="/operatore-ore" expand="full">Associa Operatore - Ore Settimanali</ion-button>
        <ion-button routerLink="/log" expand="full">Log</ion-button>
    </master-layout>
</template>

<script>
import {IonButton} from '@ionic/vue';
export default {
    components: {
        IonButton
    },
}
</script>