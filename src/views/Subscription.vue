<template>
  <div class="subscription-container">
    <Card>
      <template #title>Abonnement</template>
      <template #content>
        <Message severity="warn">Tu n'as pas encore d'abonnement actif.<br>Cette section affichera ton statut d'abonnement et les options de souscription.</Message>
        <Button label="S'abonner" icon="pi pi-credit-card" class="p-button-success" style="margin-top:1rem;" disabled />
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
import Message from 'primevue/message';
import Button from 'primevue/button';
</script>

<style scoped>
.subscription-container {
  max-width: 500px;
  margin: 3rem auto;
}
</style>
