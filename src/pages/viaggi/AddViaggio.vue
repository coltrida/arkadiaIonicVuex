<template>
    <master-layout pageTitle="Aggiungi viaggio">
        <ion-card>
            <ion-item>
                <ion-label position="floating">Vettura</ion-label>
                <ion-select @ionBlur="viaggio.car_id = $event.target.value">
                    <ion-select-option 
                        v-for="car in allcars" 
                        :key="car.id" 
                        :value="car.id">
                            {{car.name}}
                    </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Km Iniziali</ion-label>
                <ion-input type="number" v-model="viaggio.kminiziali"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Km Finali</ion-label>
                <ion-input type="number" v-model="viaggio.kmfinali"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Operatore</ion-label>
                <ion-select @ionBlur="viaggio.utente_id = $event.target.value">
                    <ion-select-option 
                        v-for="utente in allusers" 
                        :key="utente.id" 
                        :value="utente.id">
                            {{utente.name}}
                    </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Giorno</ion-label>
                <ion-input type="date" v-model="viaggio.giorno"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label>Passeggeri</ion-label>
                <ion-select multiple="true" cancel-text="Annulla" ok-text="Seleziona" :value="viaggio.passeggeri" @ionChange="viaggio.passeggeri = $event.target.value">
                    <ion-select-option
                            v-for="ragazzo in allragazzi"
                            :value="ragazzo.id"
                            :key="ragazzo.id"
                    >{{ragazzo.name}}</ion-select-option>
                </ion-select>
            </ion-item>
            
            <ion-button expand="full" @click="saveviaggio()">Aggiungi</ion-button>
        </ion-card>
    </master-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IonCard, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/vue';
export default {
    components: { IonCard, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption  },

    data(){
        return {
            viaggio: {}
        }
    },

    computed:{
        ...mapGetters('cars', { allcars:'allcars' }),
        ...mapGetters('users', { allusers:'allusers' }),
        ...mapGetters('ragazzi', { allragazzi:'allragazzi' }),
    },

    methods:{
        ...mapActions('cars', { fetchCars:'fetchCars', }),
        ...mapActions('users', { fetchUsers:'fetchUsers' }),
        ...mapActions('ragazzi', { fetchRagazzi:'fetchRagazzi' }),
        ...mapActions('viaggi', { saveviaggioAction: 'saveviaggio', }),

        saveviaggio(){
            this.saveviaggioAction(this.viaggio);
            this.$router.push("/viaggi");
        }
    },
    ionViewDidEnter(){
        this.viaggio = {
            car_id : '',
            kminiziali : 0,
            kmfinali : 0,
            utente_id: '',
            giorno : null,
            passeggeri: []
        };
        this.fetchCars(),
        this.fetchUsers(),
        this.fetchRagazzi()
    }
}
</script>