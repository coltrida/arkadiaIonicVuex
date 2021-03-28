<template>
    <master-layout pageTitle="Aggiungi Presenza Attività">
        <ion-card>
            <ion-item>
                <ion-label position="floating">Attività</ion-label>
                <ion-select placeholder="Seleziona"
                    :value="attivita.idAttivitaSelelezionata"
                    @ionChange="selezionaAttivita($event.target.value)">
                    <ion-select-option 
                        v-for="activity in allactivities" 
                        :key="activity.id" 
                        :value="activity.id+'-'+activity.costo">
                            {{activity.name}}
                    </ion-select-option>
        </ion-select>
            </ion-item>
            <ion-item>
                <ion-label>Ragazzi</ion-label>
                <ion-select 
                    multiple="true" 
                    cancel-text="Annulla" 
                    ok-text="Seleziona" 
                    :value="attivita.raga" 
                    @ionChange="attivita.raga = $event.target.value"
                >
                    <ion-select-option
                            v-for="ragazzo in allragazzi"
                            :value="ragazzo.id"
                            :key="ragazzo.id"
                    >
                        {{ragazzo.name}}
                    </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Giorno</ion-label>
                <ion-input type="date" v-model="attivita.giorno"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Quantità</ion-label>
                <ion-input type="number" v-model="attivita.quantita"></ion-input>
            </ion-item>
            <ion-button expand="full" @click="saveactivity()">Aggiungi</ion-button>
        </ion-card>
    </master-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IonCard, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/vue';
export default {
    components: { IonCard, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption  },

    computed:{
        ...mapGetters('attivita', {
            allactivities:'allactivities',
            attivita: 'getAttivita'
        }),
        ...mapGetters('ragazzi', {
            allragazzi:'allragazzi'
        })
    },

    methods:{
        ...mapActions('attivita', {
            fetchActivities:'fetchActivities',
            elementoselezionato:'elementoselezionato',
            saveactivityragazzo: 'saveactivityragazzo'
        }),
        ...mapActions('ragazzi', {
            fetchRagazzi:'fetchRagazzi',
        }),

        saveactivity(){
            this.saveactivityragazzo(this.attivita);
            this.$router.push("/presenze-attivita");
        },

        selezionaAttivita(valore){
                let id = valore.split('-')[0];
                let costo = valore.split('-')[1];
                this.attivita.idAttivitaSelelezionata = id;
                this.attivita.costo = costo;
                this.elementoselezionato(id);
            },
    },

    mounted(){
        
            this.fetchActivities();
            this.fetchRagazzi(); 
    }
}
</script>