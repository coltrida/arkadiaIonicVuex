<template>
    <master-layout pageTitle="Vetture">
        <div>
            <ion-card v-for="car in allcars" :key="car.id">
                <ion-card-content>
                    <ion-card-title>{{car.name}}</ion-card-title>
                </ion-card-content>
                <ion-item>
                    <ion-icon  @click="deleteVettura(car.id)" :icon="trash"></ion-icon>
                </ion-item>
            </ion-card>
        </div>
        
        <template v-slot:footerdata>
        <ion-fab vertical="bottom" horizontal="end">
            <ion-fab-button routerLink="/add-or-update-vettura/0">
                <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </template>
    </master-layout>
</template>

<script>
import {IonCard, IonCardContent, IonCardTitle, IonFab, IonFabButton, IonIcon, IonItem} from '@ionic/vue';
import { add, trash } from 'ionicons/icons'
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        IonCard, IonCardContent, IonCardTitle, IonFab, IonFabButton, IonIcon, IonItem
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
            fetchCars:'fetchCars',
            eliminavetturaAction: 'eliminavettura'
        }),

        deleteVettura(id){
            this.eliminavetturaAction(id);
        }
    },

    data(){
        return {
            add,
            trash
        }
    }
}
</script>