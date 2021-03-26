<template>
    <master-layout pageTitle="Presenze">
        <div>
            <ion-card v-for="presenza in allpresenze" :key="presenza.id">
                <ion-card-content>
                    <ion-card-title>{{presenza.giorno}}</ion-card-title>
                    <ion-card-subtitle>Ore: {{presenza.ore}}</ion-card-subtitle>
                </ion-card-content>
                <ion-item>
                    <ion-icon @click="deletePresenza(presenza.id)" :icon="trash"></ion-icon>
                </ion-item>
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
import {IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonFab, IonFabButton, IonIcon, IonItem} from '@ionic/vue';
import { add, trash } from 'ionicons/icons'
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonFab, IonFabButton, IonIcon, IonItem
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