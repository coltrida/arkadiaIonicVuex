<template>
    <ion-item>
        <ion-grid>
            <ion-row class="ion-justify-content-between ion-align-items-center">
                <ion-col size="6">
                    <ion-label></ion-label>
                </ion-col>
                <ion-col size="5">
                    <ion-label>{{passa.giorno}}</ion-label>
                </ion-col>
                <ion-col size="1">
                    <ion-label>{{passa.quantita}}</ion-label>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-item>
</template>

<script>
    export default {
        name: "Presenza",

        props: ['passa'],

        mounted(){
            //console.log(this.passa)
        }
    }
</script>

<style scoped>

</style>
