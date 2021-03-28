<template>
    <master-layout :pageTitle="pageTitle">
        <ion-card>
            <ion-item>
                <ion-label position="floating">Nome Attività</ion-label>
                <ion-input v-model="activity.nomeAttivita"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Tipo</ion-label>
                <ion-select 
                    @ionBlur="activity.tipo = $event.target.value">
                    <ion-select-option value="mensile">Mensile</ion-select-option>
                    <ion-select-option value="orario">Orario</ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Costo</ion-label>
                <ion-input v-model="activity.costo"></ion-input>
            </ion-item>
            <ion-button expand="full" @click="saveorupdateactivity()">{{ btnText }}</ion-button>
        </ion-card>
    </master-layout>
</template>

<script>
import { mapActions } from 'vuex';
import { IonCard, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/vue';
export default {
    components: { IonCard, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption  },

    data(){
        return {
            routeId: Number(this.$route.params.id),
            pageTitle: '',
            btnText: "",
            activity: {}
        }
    },

    computed:{
        /* ...mapGetters('attivita', {
            userbyId: 'userbyId'
        }), */
    },

    methods:{
        ...mapActions('attivita', {
            saveactivity: 'saveactivity',
            /* updateuser: 'updateuser' */
        }),

        saveorupdateactivity(){
            if(this.routeId == 0){
                this.saveactivity(this.activity);
            } /* else {
                this.updatevettura(this.nomevettura);
            } */
            this.$router.push("/attivita");
        }
    },
    ionViewDidEnter(){
        if(this.routeId === 0){
            this.pageTitle = 'Aggiungi Attività';
            this.btnText = "Aggiungi";
            this.ragazzo = {
                nomeAttivita : '',
                tipo : '',
                costo : 0
            };
        } else {
            this.pageTitle = 'Modifica Attività';
            this.btnText = "Modifica";
            this.userInfo = this.userbyId(this.routeId);
        }
    }
}
</script>