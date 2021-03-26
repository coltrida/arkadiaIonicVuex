<template>
    <master-layout :pageTitle="pageTitle">
        <ion-card>
            <ion-item>
                <ion-label position="floating">Nome Ragazzo</ion-label>
                <ion-input v-model="ragazzo.nomeRagazzo"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Voucher</ion-label>
                <ion-input type="number" v-model="ragazzo.voucher"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Scadenza voucher</ion-label>
                <ion-input type="date" v-model="ragazzo.scadenza"></ion-input>
            </ion-item>
            <ion-button expand="full" @click="saveorupdateragazzo()">{{ btnText }}</ion-button>
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
            ragazzo: {}
        }
    },

    computed:{
        ...mapGetters('cars', {
            userbyId: 'userbyId'
        }),
    },

    methods:{
        ...mapActions('ragazzi', {
            saveragazzo: 'saveragazzo',
            /* updateuser: 'updateuser' */
        }),

        saveorupdateragazzo(){
            if(this.routeId == 0){
                this.saveragazzo(this.ragazzo);
            } /* else {
                this.updatevettura(this.nomevettura);
            } */
            this.$router.push("/ragazzi");
        }
    },
    ionViewDidEnter(){
        if(this.routeId === 0){
            this.pageTitle = 'Aggiungi Ragazzo';
            this.btnText = "Aggiungi";
            this.ragazzo = {
                nomeRagazzo : '',
                voucher : 0,
                scadenza : null
            };
        } else {
            this.pageTitle = 'Modifica Ragazzo';
            this.btnText = "Modifica";
            this.userInfo = this.userbyId(this.routeId);
        }
    }
}
</script>