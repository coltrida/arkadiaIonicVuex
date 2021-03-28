<template>
    <master-layout pageTitle="Presenze">
        <div>
            <ion-card v-for="presenza in allpresenze" :key="presenza.id">
                <ion-card-content>
                    <ion-row>
                        <ion-col>
                            <ion-card-title>{{presenza.giorno}}</ion-card-title>
                            <ion-card-subtitle>Ore: {{presenza.ore}}</ion-card-subtitle>
                        </ion-col>
                        <ion-col>
                            <ion-button expand="full" color="danger" @click="deletePresenza(presenza.id)">
                                <ion-icon  :icon="trash"></ion-icon>
                            </ion-button>
                        </ion-col>
                    </ion-row>
                </ion-card-content>
            </ion-card>
        </div>
        
        <template v-slot:footerdata>
        <ion-fab vertical="bottom" horizontal="end">
            <ion-fab-button routerLink="/add-presenza">
                <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </template>
    </master-layout>
</template>

<script>
import {IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonFab, IonFabButton, IonIcon, IonRow, IonCol, IonButton } from '@ionic/vue';
import { add, trash } from 'ionicons/icons'
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonFab, IonFabButton, IonIcon, IonRow, IonCol, IonButton
    },

    computed:{
        ...mapGetters('users', {
            allpresenze:'allpresenze',
            getUser:'getUser'
        })
    },

    mounted(){
        this.fetchPresenze()
    },

    methods:{
        ...mapActions('users', {
            fetchPresenzeAction:'fetchPresenze',
            eliminapresenzaAction: 'eliminapresenza'
        }),

        fetchPresenze(){
            this.fetchPresenzeAction(this.getUser.id);
        },

        deletePresenza(id){
            this.eliminapresenzaAction(id);
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