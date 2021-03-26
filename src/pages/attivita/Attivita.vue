<template>
    <master-layout pageTitle="Attività">
        <div>
            <ion-card v-for="activity in allactivities" :key="activity.id">
                <ion-card-content>
                    <ion-card-title>{{activity.name}}</ion-card-title>
                    <ion-card-subtitle>Tipo: {{activity.tipo}}</ion-card-subtitle>
                    <ion-card-subtitle>Costo: {{activity.costo}}</ion-card-subtitle>
                </ion-card-content>
                <ion-item>
                    <ion-icon @click="deleteActivity(activity.id)" :icon="trash"></ion-icon>
                </ion-item>
            </ion-card>
        </div>
        
        <template v-slot:footerdata>
        <ion-fab vertical="bottom" horizontal="end">
            <ion-fab-button routerLink="/add-or-update-activity/0">
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
        ...mapGetters('attivita', {
            allactivities:'allactivities'
        })
    },

    mounted(){
        this.fetchActivities()
    },

    methods:{
        ...mapActions('attivita', {
            fetchActivities:'fetchActivities',
            eliminaactivityAction: 'eliminaactivity'
        }),

        deleteActivity(id){
            this.eliminaactivityAction(id);
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