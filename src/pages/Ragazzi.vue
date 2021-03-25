<template>
    <master-layout pageTitle="Operatori">
        <ion-card v-for="ragazzo in allragazzi" :key="ragazzo.id">
            <ion-card-content>
                <ion-card-title>{{ragazzo.name}}</ion-card-title>
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
        ...mapGetters('ragazzi', {
            allragazzi:'allragazzi'
        })
    },

    mounted(){
        this.fetchRagazzi()
    },

    methods:{
        ...mapActions('ragazzi', {
            fetchRagazzi:'fetchRagazzi'
        }),
    },
}
</script>