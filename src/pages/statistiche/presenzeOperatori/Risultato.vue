<template>
    <ion-item>
        <ion-grid>
            <ion-row>
                <ion-col size="6">{{valori.giorno}}</ion-col>
                <ion-col size="3">{{valori.ore}}</ion-col>
                <ion-col size="2">
                    <!-- <ion-button color="danger">Elimina</ion-button> -->
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-item>


</template>

<script>
    export default {
        name: "Risultato",

        data(){
            return{
                valori: []
            }
        },

        props: ['dati'],

        mounted(){
            this.valori = this.dati
        }
    }
</script>

<style scoped>

</style>
