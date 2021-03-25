<template>
    <master-layout :pageTitle="title">
        <div v-if="getLogged">
            <ion-button routerLink="/vetture" expand="full">Vetture</ion-button>
            <ion-button routerLink="/operatori" expand="full">Operatori</ion-button>
            <ion-button routerLink="/ragazzi" expand="full">Ragazzi</ion-button>
        </div>
        
        <login v-else></login>
        
        
    </master-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from '../components/Login';
import {IonButton} from '@ionic/vue';
export default {
    components: {
        Login, IonButton
    },

    

    computed:{
        ...mapGetters('users', {
            getLogged: 'getLogged',
            getUser: 'getUser',
        }),

        title(){
            if(this.getLogged){
                return this.getUser.name
            } else {
                return 'Arkadia'
        }
        },
    },
    
}
</script>