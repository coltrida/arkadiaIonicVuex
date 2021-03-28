<template>
    <master-layout pageTitle="Aggiungi Presenza">
        <ion-card>
            <ion-item>
                <ion-label position="floating">Giorno</ion-label>
                <ion-input type="date" v-model="presenza.giorno"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Ore</ion-label>
                <ion-input type="number" v-model="presenza.ore"></ion-input>
            </ion-item>
            <ion-button expand="full" @click="savepresenza()">Aggiungi</ion-button>
        </ion-card>
    </master-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IonCard, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
export default {
    components: { IonCard, IonItem, IonLabel, IonInput, IonButton  },

    data(){
        return {
            presenza: {}
        }
    },

    computed:{
        ...mapGetters('users', {
            getUser:'getUser'
        }),
    },

    methods:{
        ...mapActions('users', {
            savepresenzaAction: 'savepresenza',
        }),

        savepresenza(){
            this.savepresenzaAction(this.presenza);
            this.$router.push(`/presenze-operatore`); 
        }
    },
    ionViewDidEnter(){
        this.presenza = {
            idUser : this.getUser.id,
            giorno : new Date(),
            ore : 0
        };
    }
}
</script>