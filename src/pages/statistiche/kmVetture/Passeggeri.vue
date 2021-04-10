<template>
    <ion-content class="ion-padding">
        <div v-for="elemento in pass" :key="elemento.nome">
            {{elemento.nome}}
        </div>

    </ion-content>
</template>

<script>
    import { IonContent } from '@ionic/vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Passeggeri',
        components: { IonContent },
        props: ['pass']
    });
</script>

<style scoped>

</style>
