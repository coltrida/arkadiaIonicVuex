<template>
    <master-layout pageTitle="Statistiche Presenze Operatori">
        <ion-card>
            <ion-item>
                <ion-label position="floating">Operatore</ion-label>
                <ion-select placeholder="Seleziona"
                    @ionChange="statistica.user = $event.target.value">
                    <ion-select-option 
                        v-for="user in allusers" 
                        :key="user.id" 
                        :value="user.id">
                            {{user.name}}
                    </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>

            <ion-label>Settimana</ion-label>
            <ion-select placeholder="Seleziona"  v-if="getSet"
                    :value='statistica.settimana=getSet' 
                    @ionChange="statistica.settimana= $event.target.value"
            >
                <ion-select-option
                        v-for="i in getSettimane"
                        :value="i"
                        :key="i"
                >{{i}}</ion-select-option>
            </ion-select>
        </ion-item>

            <ion-button expand="full" @click="calcola()">Calcola</ion-button>
        </ion-card>

        <div>
        <ion-item v-if="getTot" color="success">
        <ion-grid>
                <ion-row>
                    <ion-col size="6" color="success">Giorno</ion-col>
                    <ion-col size="3" color="success">Ore</ion-col>
                    <ion-col size="2" color="success"></ion-col>
                </ion-row>
            </ion-grid>
        </ion-item>
           <ion-list>
                <risultato
                    v-for="item in allPresenzeOperatore"
                    :dati=item
                    :key="item.name"
                />
            </ion-list> 
        <h4 v-if="getTot">Ore Totali: € {{getTot}}</h4>
        </div>
        
    </master-layout>
</template>

<script>
import Risultato from "./Risultato.vue";
import { mapActions, mapGetters } from 'vuex';
import { IonCard, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/vue';
export default {
    components: { IonCard, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption, Risultato },

    data(){
        return {
            statistica:{},
            mostraTot: false,
        }
    },

    computed:{
        ...mapGetters('users', {
            allusers:'allusers'
        }),

        ...mapGetters('statisticheOperatori', {
            getSettimanaAttuale:'getSettimanaAttuale',
            getSettimane:'getSettimane',
            allPresenzeOperatore:'allPresenzeOperatore',
            getTot:'getTot'
        }),

        getSet(){
            let stringa = this.getSettimanaAttuale[0];
            return stringa
        }

    },

    methods:{
        ...mapActions('users', {
            fetchUsers:'fetchUsers',
        }),

        ...mapActions('statisticheOperatori', {
            fetchSettimane:'fetchSettimane',
            fetchPresenzeOperatore:'fetchPresenzeOperatore'
        }),

        calcola(){
            this.fetchPresenzeOperatore(this.statistica);
        },
    },

    mounted(){
            this.fetchUsers();
            this.fetchSettimane();
            this.statistica = {
                        user : '',
                        settimana : this.getSet,
                    };
    },

}
</script>