<template>
    <ion-item>
        <ion-grid>
                <ion-row>
                    <ion-col size="4">{{dati.giorno}}</ion-col>
                    <ion-col size="8"><ion-label>
            <h3>Km: {{dati.kmPercorsi}} - Op.: {{dati.operatore}}</h3>
        </ion-label></ion-col>
                </ion-row>
            </ion-grid>
    </ion-item>


</template>

<script>
    import {IonItem, IonCol, IonRow, IonGrid, IonLabel } from '@ionic/vue';
    export default {
        name: "Risultato",

        components:{ IonItem, IonCol, IonRow, IonGrid, IonLabel },

        props: ['dati'],

        computed: {
            totPasseggeri() {
                return this.dati.passeggeri.length
            }
        },

        methods: {

        }
    }
</script>

<style scoped>

</style>
