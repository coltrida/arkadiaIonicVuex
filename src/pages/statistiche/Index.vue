<template>
    <master-layout pageTitle="Statistiche">
        <ion-button routerLink="/statistiche-presenze-ragazzi" expand="full">Presenze Ragazzi</ion-button>
        <ion-button routerLink="/statistiche-presenze-operatori" expand="full">Presenze Operatori</ion-button>
        <ion-button routerLink="/statistiche-km-vetture" expand="full">Chilometri Vetture</ion-button>
        <ion-button routerLink="/statistiche-km-ragazzi" expand="full">Chilometri Ragazzi</ion-button>
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