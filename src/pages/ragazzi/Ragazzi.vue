<template>
    <master-layout pageTitle="Operatori">
        <div>
            <ion-card v-for="ragazzo in allragazzi" :key="ragazzo.id">
                <ion-card-content>
                    <ion-card-title>{{ragazzo.name}}</ion-card-title>
                    <ion-card-subtitle>Voucher: {{ragazzo.voucher}}</ion-card-subtitle>
                    <ion-card-subtitle>Scadenza Voucher: {{ragazzo.scadenza}}</ion-card-subtitle>
                </ion-card-content>
                <ion-item>
                    <ion-icon @click="deleteRagazzo(ragazzo.id)" :icon="trash"></ion-icon>
                </ion-item>
            </ion-card>
        </div>
        
        <template v-slot:footerdata>
        <ion-fab vertical="bottom" horizontal="end">
            <ion-fab-button routerLink="/add-or-update-ragazzo/0">
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
        ...mapGetters('ragazzi', {
            allragazzi:'allragazzi'
        })
    },

    mounted(){
        this.fetchRagazzi()
    },

    methods:{
        ...mapActions('ragazzi', {
            fetchRagazzi:'fetchRagazzi',
            eliminaragazzoAction: 'eliminaragazzo'
        }),

        deleteRagazzo(id){
            this.eliminaragazzoAction(id);
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