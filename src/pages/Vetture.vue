<template>
    <master-layout pageTitle="Vetture">
        <ion-card v-for="car in allcars" :key="car.id">
            <ion-card-content>
                <ion-card-title>{{car.name}}</ion-card-title>
            </ion-card-content>
        </ion-card>
    </master-layout>
</template>

<script>
import {IonCard, IonCardContent, IonCardTitle} from '@ionic/vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        IonCard, IonCardContent, IonCardTitle
    },

    computed:{
        ...mapGetters('cars', {
            allcars:'allcars'
        })
    },

    mounted(){
        this.fetchCars()
    },

    methods:{
        ...mapActions('cars', {
            fetchCars:'fetchCars'
        }),
    },
}
</script>