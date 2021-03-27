<template>
    <master-layout pageTitle="Presenze Attività">
        <div>
            <ion-card v-for="attivitaragazzo in allpresenzeattivitaragazzi" :key="attivitaragazzo.id">
                <ion-card-content>
                    <ion-row>
                        <ion-col>
                             <ion-card-title>{{attivitaragazzo.ragazzo}}</ion-card-title>
                             <ion-card-subtitle>giorno: {{attivitaragazzo.giorno}}</ion-card-subtitle>
                             <ion-card-subtitle>Attività: {{attivitaragazzo.attivita}}</ion-card-subtitle>
                             <ion-card-subtitle>Quantità: {{attivitaragazzo.quantita}}</ion-card-subtitle>
                        </ion-col>
                        <ion-col>
                            <ion-button expand="full" @click="deleteActivity(attivitaragazzo.id)" color="danger">
                                <ion-icon :icon="trash"></ion-icon>
                            </ion-button>

                        </ion-col>
                    </ion-row>
                    
                </ion-card-content>
            </ion-card>
        </div>
        
        <template v-slot:footerdata>
        <ion-fab vertical="bottom" horizontal="end">
            <ion-fab-button routerLink="/add-or-update-attivita/0">
                <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </template>
    </master-layout>
</template>

<script>
import {IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonFab, IonFabButton, IonIcon, IonRow,} from '@ionic/vue';
import { add, trash } from 'ionicons/icons'
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonFab, IonFabButton, IonIcon, IonRow,
    },

    computed:{
        ...mapGetters('attivita', {
            allpresenzeattivitaragazzi:'allpresenzeattivitaragazzi'
        })
    },

    mounted(){
        this.fetchPresenzeAttivitaRagazzi()
    },

    methods:{
        ...mapActions('attivita', {
            fetchPresenzeAttivitaRagazzi:'fetchPresenzeAttivitaRagazzi',
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