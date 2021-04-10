<template>
    <master-layout pageTitle="Statistiche Km Vetture">
        <ion-card>
            <ion-item>
                <ion-label position="floating">Vetture</ion-label>
                <ion-select placeholder="Seleziona"
                    :value="statistica.vettura"
                    @ionChange="statistica.vettura = $event.target.value">
                    <ion-select-option 
                        v-for="car in allcars" 
                        :key="car.id" 
                        :value="car.id">
                            {{car.name}}
                    </ion-select-option>
                </ion-select>
            </ion-item>

            <ion-item>
                <ion-label>Mese</ion-label>
                <ion-select multiple="true" cancel-text="Annulla" ok-text="Seleziona" :value="mesi" @ionChange="mesi= $event.target.value">
                    <ion-select-option
                            v-for="j in 12"
                            :value="j"
                            :key="j"
                    >{{j}}</ion-select-option>
                </ion-select>
            </ion-item>

            <ion-item>
                <ion-label>Anno</ion-label>
                <ion-select placeholder="Seleziona"
                        :value='statistica.anno=annoat' 
                        @ionChange="statistica.anno = $event.target.value">
                >
                    <ion-select-option
                    v-for="i in annofine"
                    :value="i+2019"
                    :key="i"
            >{{i+2019}}</ion-select-option>
                </ion-select>
            </ion-item>

            <ion-button expand="full" @click="calcola()">Calcola</ion-button>
        </ion-card>

        <div>
            <ion-item color="success" v-if="getTot">
            <ion-grid>
                <ion-row>
                    <ion-col size="4">Giorno</ion-col>
                    <ion-col size="8">Dettagli</ion-col>
                </ion-row>
            </ion-grid>
        </ion-item>
           <ion-list>
                <risultato
                    v-for="item in allViaggiVettura"
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
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { IonCard, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption, IonCol, IonRow, IonGrid, IonList } from '@ionic/vue';
export default {
    components: { IonCard, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption, Risultato, IonCol, IonRow, IonGrid, IonList  },

    data(){
        return {
            statistica:{},
            mesi: [],
            anno: '',
            mostraTot: false,
        }
    },

    computed:{
        ...mapGetters('cars', {
            allcars:'allcars'
        }),

        ...mapGetters('statisticheKmVetture', {
            allViaggiVettura:'allViaggiVettura',
            getTot:'getTot'
        }),

        getSet(){
            let stringa = this.getSettimanaAttuale[0];
            return stringa
        },

        annofine(){
                let annoattuale = new Date().getFullYear();
                return annoattuale - 2019
            },

        annoat(){
            let annoattuale = new Date().getFullYear();
            return annoattuale
        }

    },

    methods:{
        ...mapActions('cars', {
            fetchCars:'fetchCars',
        }),

        ...mapActions('statisticheKmVetture', {
            fetchKmVetture:'fetchKmVetture'
        }),

        ...mapMutations('statisticheKmVetture', {
            clearKm:'clearKm'
        }),

        getMeseAttuale(){
            let mese = new Date;
            this.mesi.push(mese.getMonth()+1);    
        },

        calcola(){
            this.statistica.mesi = this.mesi;
            this.fetchKmVetture(this.statistica);
        },
    },

    mounted(){
            this.fetchCars();
            this.getMeseAttuale();
    },

    ionViewDidEnter(){
        this.clearKm();
        this.mostraTot = false
    }

}
</script>