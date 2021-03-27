<template>
    <master-layout pageTitle="Aggiungi Associazione">
        <ion-card>
            <ion-item>
                <ion-label position="floating">Attività</ion-label>
                <ion-select @ionBlur="associa.attivita = $event.target.value">
                    <ion-select-option 
                        v-for="activity in allactivities" 
                        :key="activity.id" 
                        :value="activity.id">
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
                    :value="associa.raga" 
                    @ionChange="associa.raga = $event.target.value"
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
            
            <ion-button expand="full" @click="saveassociazione()">Aggiungi</ion-button>
        </ion-card>
    </master-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IonCard, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/vue';
export default {
    components: { IonCard, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption  },

    data(){
        return {
            associa: {
                attivita : '',
                raga: []
            }
        }
    },

    computed:{
        ...mapGetters('attivita', { allactivities:'allactivities' }),
        ...mapGetters('ragazzi', { allragazzi:'allragazzi' }),
    },

    methods:{
        ...mapActions('attivita', { 
                        fetchActivities:'fetchActivities', 
                        saveassociazioneactivityragazzoActivities:'saveassociazioneactivityragazzo' 
                    }),
        ...mapActions('ragazzi', { fetchRagazzi:'fetchRagazzi' }),

        saveassociazione(){
            this.saveassociazioneactivityragazzoActivities(this.associa);
            this.$router.push("/attivita-ragazzo");
        }
    },
    ionViewDidEnter(){
        this.associa = {
            attivita : '',
            raga: []
        };
        this.fetchActivities(),
        this.fetchRagazzi()
    }
}
</script>