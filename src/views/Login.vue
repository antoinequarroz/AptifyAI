<template>
  <div class="login-container">
    <Card>
      <template #title>Connexion</template>
      <template #content>
        <form @submit.prevent="onLogin">
          <div class="p-fluid">
            <div class="p-field">
              <label for="email">Email</label>
              <InputText id="email" v-model="email" type="email" required />
            </div>
            <div class="p-field">
              <label for="password">Mot de passe</label>
              <Password id="password" v-model="password" toggleMask required feedback="false"/>
            </div>
            <Button label="Se connecter" icon="pi pi-sign-in" type="submit" class="p-button-secondary" style="margin-top:1rem;" :disabled="loading" />
          </div>
        </form>
        <Message v-if="message" :severity="messageType" style="margin-top:1rem;">{{ message }}</Message>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Message from 'primevue/message';
import { supabase } from '../lib/supabase';

const email = ref('');
const password = ref('');
const loading = ref(false);
const message = ref('');
const messageType = ref('info');

async function onLogin() {
  message.value = '';
  messageType.value = 'info';
  loading.value = true;
  const { error } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value });
  loading.value = false;
  if (error) {
    message.value = error.message;
    messageType.value = 'error';
  } else {
    message.value = 'Connexion réussie !';
    messageType.value = 'success';
    // Tu peux rediriger ici vers le dashboard si besoin
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 3rem auto;
}
</style>
