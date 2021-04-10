<template>
    <master-layout pageTitle="Statistiche Presenze Ragazzi">
        <ion-card>
            <ion-item>
                <ion-label position="floating">Ragazzo</ion-label>
                <ion-select placeholder="Seleziona"
                    @ionChange="statistica.ragazzo = $event.target.value">
                    <ion-select-option 
                        v-for="ragazzo in allragazzi" 
                        :key="ragazzo.id" 
                        :value="ragazzo.id">
                            {{ragazzo.name}}
                    </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
                <ion-label>Mese</ion-label>
                <ion-select 
                    multiple="true" 
                    cancel-text="Annulla" 
                    ok-text="Seleziona" 
                    :value="mes" 
                    @ionChange="statistica.mese = $event.target.value"
                >
                    <ion-select-option
                            v-for="mese in 12"
                            :value="mese"
                            :key="mese"
                    >
                        {{mese}}
                    </ion-select-option>
                </ion-select>
            </ion-item>

            <ion-item>
                <ion-label>Anno</ion-label>
                <ion-select 
                    cancel-text="Annulla" 
                    ok-text="Seleziona" 
                    :value="ann" 
                    @ionChange="statistica.anno = $event.target.value">
                >
                    <ion-select-option
                            v-for="anno in anni"
                            :value="anno"
                            :key="anno"
                    >
                        {{anno}}
                    </ion-select-option>
                </ion-select>
            </ion-item>

            <ion-button expand="full" @click="calcola()">Calcola</ion-button>
        </ion-card>

        <div>
            <h3>{{getNomeRagazzo}}</h3>
           <ion-list>
                <risultato
                    v-for="item in allPresenzeRagazzo"
                    :dati=item
                    :key="item.name"
                />
            </ion-list> 
        <h4 v-if="mostraTot">Costo Totale: € {{getCostoTot}}</h4>
        </div>
        
    </master-layout>
</template>

<script>
import Risultato from "./Risultato.vue";
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { IonCard, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/vue';
export default {
    components: { IonCard, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption, Risultato },

    data(){
        return {
            statistica:{},
            anni: [],
            mostraTot: false,
        }
    },

    computed:{
        ...mapGetters('ragazzi', {
            allragazzi:'allragazzi'
        }),

        ...mapGetters('statisticheRagazzi', {
            allPresenzeRagazzo:'allPresenzeRagazzo',
            getCostoTot:'getCostoTot',
            getNomeRagazzo:'getNomeRagazzo'
        }),

        mes(){
            let oggi = new Date();
            return [oggi.getMonth()+1]
        },

        ann(){
            let oggi = new Date();
            return oggi.getFullYear();
        }
    },

    methods:{
        ...mapActions('ragazzi', {
            fetchRagazzi:'fetchRagazzi',
        }),

        ...mapActions('statisticheRagazzi', {
            fetchPresenzeRagazzo:'fetchPresenzeRagazzo',
        }),

        ...mapMutations('statisticheRagazzi', {
            clearstatistiche:'clearstatistiche'
        }),

        caricaAnni(){
            let annoOggi = new Date().getFullYear();
            for(let i = 2020; i <= annoOggi; i++){
                 this.anni.push(i);   
            }
        },

        calcola(){
            this.fetchPresenzeRagazzo(this.statistica);
            this.mostraTot = true;
        },
    },

    mounted(){
            
            this.fetchRagazzi();
            this.statistica = {
                ragazzo : '',
                mese : this.mes,
                anno : this.ann
            };
            this.caricaAnni(); 
            this.mostraTot = false;
    },

    ionViewDidEnter(){
        this.clearstatistiche();
        this.statistica = null;
    }
}
</script>