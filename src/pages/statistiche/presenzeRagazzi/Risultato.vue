<template>
    <ion-item color="success">
        <ion-grid>
            <ion-row>
                <ion-col size="6">{{dati[0].activity.name}}</ion-col>
                <ion-col size="3">Qt</ion-col>
                <ion-col size="2"></ion-col>
            </ion-row>
        </ion-grid>
    </ion-item>

        <ion-list>
            <Presenza
                v-for="item in valori"
                :passa=item
                :key="item.id"
            />
        </ion-list>


</template>

<script>
    import Presenza from "./Presenza";
    export default {
        name: "Risultato",

        data(){
            return{
                valori: []
            }
        },

        components: {Presenza},

        props: ['dati'],

        mounted(){
            this.valori = this.dati
        }
    }
</script>

<style scoped>

</style>
