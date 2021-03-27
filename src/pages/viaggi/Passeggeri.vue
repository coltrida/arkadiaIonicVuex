<template>
  <ion-content class="ion-padding">
       <ion-list>
           <ion-item v-for="elemento in pass" :key="elemento.nome">
                <ion-label>{{elemento.nome}}</ion-label>
           </ion-item>
        </ion-list>
  </ion-content>
</template>

<script>
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Popover',
  props: ['pass'],
  components: { IonContent, IonList, IonItem, IonLabel }
});
</script>