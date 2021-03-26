<template>
    <master-layout :pageTitle="pageTitle">
        <ion-card>
            <ion-item>
                <ion-label position="floating">Nome Vettura</ion-label>
                <ion-input v-model="nomevettura"></ion-input>
            </ion-item>
            <ion-button expand="full" @click="saveorupdatevettura()">{{ btnText }}</ion-button>
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
            routeId: Number(this.$route.params.id),
            pageTitle: '',
            btnText: "",
            nomevettura: ''
        }
    },

    computed:{
        ...mapGetters('cars', {
            userbyId: 'userbyId'
        }),
    },

    methods:{
        ...mapActions('cars', {
            savevettura: 'savevettura',
            /* updateuser: 'updateuser' */
        }),

        saveorupdatevettura(){
            if(this.routeId == 0){
                this.savevettura(this.nomevettura);
            } /* else {
                this.updatevettura(this.nomevettura);
            } */
            this.$router.push("/vetture");
        }
    },
    ionViewDidEnter(){
        if(this.routeId === 0){
            this.pageTitle = 'Aggiungi Vettura';
            this.btnText = "Add";
            this.nomevettura = '';
        } else {
            this.pageTitle = 'Modifica Vettura';
            this.btnText = "Update";
            this.userInfo = this.userbyId(this.routeId);
        }
    }
}
</script>