<template>
    <master-layout pageTitle="Associazioni Attività - Ragazzo">
        <div>
            <ion-card v-for="associazione in allactivitiesragazziassociazioni" :key="associazione.id">
                <ion-card-content>
                    <ion-card-title>Attività: {{associazione.attivita}}</ion-card-title>
                    <ion-card-subtitle>Ragazzo: {{associazione.ragazzo}}</ion-card-subtitle>
                </ion-card-content>
                <ion-item>
                    <ion-icon @click="deleteAssociazione(associazione.id)" :icon="trash"></ion-icon>
                </ion-item>
            </ion-card>
        </div>
        
        <template v-slot:footerdata>
        <ion-fab vertical="bottom" horizontal="end">
            <ion-fab-button routerLink="/add-associazione">
                <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </template>
    </master-layout>
</template>

<script>
import {IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonFab, IonFabButton, IonIcon, IonItem } from '@ionic/vue';
import { add, trash } from 'ionicons/icons'
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonFab, IonFabButton, IonIcon, IonItem
    },

    computed:{
        ...mapGetters('attivita', {
            allactivitiesragazziassociazioni:'allactivitiesragazziassociazioni'
        })
    },

    mounted(){
        this.fetchActivitiesRagazzi()
    },

    methods:{
        ...mapActions('attivita', {
            fetchActivitiesRagazzi:'fetchActivitiesRagazzi',
            eliminaassociazioneAction: 'eliminaassociazione'
        }),

        deleteAssociazione(id){
            this.eliminaassociazioneAction(id);
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