<template>
    <ion-item>
        <ion-grid>
            <ion-row class="ion-justify-content-between ion-align-items-center">
                <ion-col size="6">
                    <ion-label>{{passa.giorno}}</ion-label>
                </ion-col>
                <ion-col size="3">
                    <ion-label>{{passa.quantita}}</ion-label>
                </ion-col>
                <ion-col size="3">
                    <ion-label>
                        <ion-button expand="full" color="danger" @click="deletePresenzaRagazzo(payl)">Elimina</ion-button>
                    </ion-label>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-item>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        name: "Presenza",

        data(){
            return{
                payl:{
                    id: this.passa.id,
                    id_att: this.passa.activity_id
                }
            }
        },

        props: ['passa'],

        methods:{
            ...mapActions('statisticheRagazzi', {
                eliminapresenzaragazzoAction: 'eliminapresenzaragazzo'
            }),

            deletePresenzaRagazzo(payl){
                this.eliminapresenzaragazzoAction(payl);
                this.$router.go()
            }
        },

        mounted(){
            //console.log(this.passa)
        }
    }
</script>

<style scoped>

</style>
