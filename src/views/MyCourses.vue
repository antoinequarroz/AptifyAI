<template>
  <div class="courses-container">
    <Card>
      <template #title>Mes cours</template>
      <template #content>
        <Message severity="info">Aucun cours suivi pour le moment.<br>Cette section affichera la liste de tes cours achetés ou suivis.</Message>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
import Message from 'primevue/message';
</script>

<style scoped>
.courses-container {
  max-width: 500px;
  margin: 3rem auto;
}
</style>
