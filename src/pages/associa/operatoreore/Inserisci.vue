<template>
    <master-layout pageTitle="Associa Ore Settimanali">
        <ion-card>
            <ion-card-title>{{user.name}}</ion-card-title>
            <ion-item>
                <ion-label position="floating">Ore Settimanali</ion-label>
                <ion-input type="number" v-model="user.oresettimanali"></ion-input>
            </ion-item>
            
            <ion-button expand="full" @click="saveassociazione()">Associa</ion-button>
        </ion-card>
    </master-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IonCard, IonItem, IonLabel, IonButton, IonCardTitle, IonInput } from '@ionic/vue';
export default {
    components: { IonCard, IonItem, IonLabel, IonButton, IonCardTitle, IonInput  },

    data(){
        return {
            routeId: Number(this.$route.params.id),
            user: {}
        }
    },

    computed:{
        ...mapGetters('users', { userbyId: 'userbyId' }),
    },

    methods:{
        ...mapActions('users', { saveassociazioneoperatoreoreAction:'saveassociazioneoperatoreore' }),

        saveassociazione(){
            this.saveassociazioneoperatoreoreAction(this.user);
            this.$router.push("/operatore-ore");
        }
    },
    ionViewDidEnter(){
        this.user = this.userbyId(this.routeId);
    }
}
</script>