<template>
    <master-layout pageTitle="Viaggi">
        <div>
            <ion-card v-for="viaggio in allviaggi" :key="viaggio.id">
                <ion-card-content>
                    <ion-row>
                        <ion-col>
                            <ion-card-title>{{viaggio.giorno}}</ion-card-title>
                            <ion-card-subtitle>Vettura {{viaggio.vettura}}</ion-card-subtitle>
                            <ion-card-subtitle>Km Percorsi: {{viaggio.kmPercorsi}}</ion-card-subtitle>
                            <ion-card-subtitle>Operatore: {{viaggio.operatore}}</ion-card-subtitle>
                        </ion-col>
                        <ion-col>
                            <ion-button expand="full" color="primary" @click="openPopover(viaggio.passeggeri)">Passeggeri</ion-button>
                            <ion-button expand="full"  @click="deleteViaggio(viaggio.id)" color="danger">
                                <ion-icon :icon="trash"></ion-icon>
                            </ion-button>
                        </ion-col>
                    </ion-row>
                </ion-card-content>
            </ion-card>
        </div>
        
        <template v-slot:footerdata>
        <ion-fab vertical="bottom" horizontal="end">
            <ion-fab-button routerLink="/add-viaggio">
                <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </template>
    </master-layout>
</template>

<script>
import {IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonFab, IonFabButton, IonIcon, IonRow, IonCol, IonButton, popoverController } from '@ionic/vue';
import Popover from './Passeggeri.vue'
import { add, trash } from 'ionicons/icons'
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonFab, IonFabButton, IonIcon, IonRow, IonCol, IonButton
    },

    computed:{
        ...mapGetters('viaggi', {
            allviaggi:'allviaggi'
        })
    },

    mounted(){
        this.fetchViaggi()
    },

    methods:{
        ...mapActions('viaggi', {
            fetchViaggi:'fetchViaggi',
            eliminaviaggioAction: 'eliminaviaggio'
        }),

        deleteViaggio(id){
            this.eliminaviaggioAction(id);
        },

        async openPopover(passeggeri, ev) {
            const popover = await popoverController
                .create({
                component: Popover,
                cssClass: 'my-custom-class',
                event: ev,
                componentProps: {pass: passeggeri},
                translucent: true
                })
            return popover.present();
            },
        
    },

    data(){
        return {
            add,
            trash
        }
    }
}
</script>