<template>
    <master-layout pageTitle="Associazioni Operatore - Ore">
        <div>
            <ion-card v-for="user in allusers" :key="user.id">
                <ion-card-content>
                    <ion-row>
                        <ion-col>
                            <ion-card-title>{{user.name}}</ion-card-title>
                            <ion-card-subtitle>Ore settimanali: {{user.oresettimanali}}</ion-card-subtitle>
                            <ion-card-subtitle>Ore saldo: {{user.oresaldo}}</ion-card-subtitle>
                        </ion-col>
                        <ion-col>
                            <ion-button expand="full" @click="modificaOreAssociazione(user.id)" color="success">
                                <ion-icon :icon="create"></ion-icon>
                                Modifica
                            </ion-button>
                        </ion-col>
                    </ion-row>
                </ion-card-content>
            </ion-card>
        </div>
        
    </master-layout>
</template>

<script>
import {IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonIcon, IonButton, IonRow, IonCol } from '@ionic/vue';
import { add, create } from 'ionicons/icons'
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonIcon, IonButton, IonRow, IonCol
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
            fetchUsers:'fetchUsers',
        }),

        modificaOreAssociazione(id){
            this.$router.push(`/operatore-ore/${id}`)
        }
    },

    data(){
        return {
            add,
            create
        }
    }
}
</script>