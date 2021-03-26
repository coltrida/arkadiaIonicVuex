<template>
    <master-layout pageTitle="Operatori">
        <ion-card v-for="user in allusers" :key="user.id">
            <ion-card-content>
                <ion-card-title>{{user.name}}</ion-card-title>
            </ion-card-content>
        </ion-card>
    </master-layout>
</template>

<script>
import {IonCard, IonCardContent, IonCardTitle} from '@ionic/vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        IonCard, IonCardContent, IonCardTitle
    },

    computed:{
        ...mapGetters('users', {
            allusers:'allusers'
        })
    },

    mounted(){
        this.fetchUsers()
    },

    methods:{
        ...mapActions('users', {
            fetchUsers:'fetchUsers'
        }),
    },
}
</script>