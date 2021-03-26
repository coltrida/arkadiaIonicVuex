<template>
    <ion-button routerLink="/presenzeOperatore" expand="full">Presenze Operatore</ion-button>
    <ion-button routerLink="/vetture" expand="full">Vetture</ion-button>
    <ion-button routerLink="/operatori" expand="full">Operatori</ion-button>
    <ion-button routerLink="/ragazzi" expand="full">Ragazzi</ion-button>
    <ion-button routerLink="/attivita" expand="full">Attività</ion-button>
</template>

<script>
import {IonButton} from '@ionic/vue';
export default {
    components: {
        IonButton
    },
}
</script>