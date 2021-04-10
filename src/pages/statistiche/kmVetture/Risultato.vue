<template>
    <ion-item>
        <ion-grid>
                <ion-row>
                    <ion-col size="4">{{dati.giorno}}</ion-col>
                    <ion-col size="8"><ion-label>
            <h3>Km: {{dati.kmPercorsi}} - Op.: {{dati.operatore}}</h3>
            <ion-button @click="openPopover">Passeggeri {{totPasseggeri}}</ion-button>
        </ion-label></ion-col>
                </ion-row>
            </ion-grid>
    </ion-item>


</template>

<script>
    import {popoverController, IonItem, IonCol, IonRow, IonGrid, IonButton, IonLabel } from '@ionic/vue';
    import Passeggeri from "./Passeggeri"
    export default {
        name: "Risultato",

        components:{ IonItem, IonCol, IonRow, IonGrid, IonButton, IonLabel },

        props: ['dati'],

        computed: {
            totPasseggeri() {
                return this.dati.passeggeri.length
            }
        },

        methods: {
            async openPopover(ev) {
                const popover = await popoverController.create({
                    component: Passeggeri,
                    traslucent: true,
                    componentProps: {pass: this.dati.passeggeri},
                    event: ev
                })
                return popover.present()
            },
        }
    }
</script>

<style scoped>

</style>
