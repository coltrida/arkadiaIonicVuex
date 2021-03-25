<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-grid>
                    <ion-row>
                        <ion-col class="ion-align-self-center">
                            <ion-title>{{ pageTitle }}</ion-title>
                        </ion-col>
                        <ion-col>
                            <ion-button expand="full" routerLink="/" color="white">Home</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <slot></slot>
        </ion-content>

        <ion-footer>
            <slot name="footerdata"></slot>
        </ion-footer>
    </ion-page>
</template>

<script>
import {
    IonGrid,
    IonCol,
    IonRow,
    IonButton,
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonFooter,
} from '@ionic/vue';
export default {
    components: {
        IonGrid,
        IonCol,
        IonRow,
        IonButton,
        IonPage,
        IonHeader,
        IonContent,
        IonToolbar,
        IonTitle,
        IonFooter
    },
    props: ["pageTitle"]
};
</script>

<style scoped>
    ion-toolbar{
        --background: var(--ion-color-primary);
        --color: var(--ion-color-primary-contrast);
    }
</style>