<template>
  <Card>
    <template #title>Créer un compte utilisateur</template>
    <template #content>
      <form @submit.prevent="createAccount">
        <div class="p-fluid">
          <div class="p-field">
            <label for="email">Email</label>
            <InputText id="email" v-model="email" type="email" required />
          </div>
          <div class="p-field">
            <label for="password">Mot de passe</label>
            <Password id="password" v-model="password" toggleMask required feedback="false"/>
          </div>
          <div class="p-field">
            <label for="role">Rôle</label>
            <Dropdown id="role" v-model="role" :options="roleOptions" optionLabel="label" optionValue="value" placeholder="Choisir un rôle" />
          </div>
          <Button label="Créer le compte" icon="pi pi-user-plus" type="submit" class="p-button-success" :disabled="loading" />
        </div>
      </form>
      <Message v-if="message" :severity="message.severity" style="margin-top:1rem;">{{ message.text }}</Message>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Dropdown from 'primevue/dropdown';
import Message from 'primevue/message';
import { supabase } from '../../lib/supabase';
import { createProfile } from '../../lib/profile';

const email = ref('');
const password = ref('');
const role = ref('student');
const roleOptions = [
  { label: 'Étudiant', value: 'student' },
  { label: 'Professeur', value: 'prof' },
  { label: 'Admin', value: 'admin' }
];
const loading = ref(false);
const message = ref(null);

async function createAccount() {
  loading.value = true;
  message.value = null;
  const { data, error } = await supabase.auth.signUp({ email: email.value, password: password.value });
  if (error) {
    message.value = { severity: 'error', text: error.message };
    loading.value = false;
    return;
  }
  await createProfile(data.user, role.value);
  message.value = { severity: 'success', text: "Compte créé ! Un email de confirmation a été envoyé." };
  loading.value = false;
  email.value = '';
  password.value = '';
  role.value = 'student';
}
</script>

<style scoped>
.p-field {
  margin-bottom: 1.2rem;
}
</style>
