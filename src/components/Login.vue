<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>Login</ion-card-title>
        </ion-card-header>
            <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input v-model="user.email"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input v-model="user.password"></ion-input>
            </ion-item>
            <ion-button expand="full" @click="login()">Login</ion-button>
        </ion-card>
</template>

<script>
import { mapActions } from 'vuex';
import { IonCard, IonItem, IonLabel, IonInput, IonButton, IonCardHeader, IonCardTitle } from '@ionic/vue';
export default {
    components: { IonCard, IonItem, IonLabel, IonInput, IonButton, IonCardHeader, IonCardTitle  },

    data(){
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },

    methods:{
        ...mapActions('users', {
            loginUser: 'loginUser'
        }),

        login(){
            this.loginUser(this.user);
        }
    }
}
</script>