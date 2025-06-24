<template>
  <div class="register-container">
    <Card>
      <template #title>Inscription</template>
      <template #content>
        <form @submit.prevent="register">
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
            <div class="p-field-checkbox" style="margin:1rem 0;">
              <Checkbox id="terms" v-model="terms" :binary="true" />
              <label for="terms">J'accepte les conditions d'utilisation</label>
            </div>
            <Button label="S'inscrire" icon="pi pi-user-plus" type="submit" class="p-button-success" :disabled="!terms || loading" />
          </div>
        </form>
        <Message v-if="message" :severity="message.severity" style="margin-top:1rem;">{{ message.text }}</Message>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Message from 'primevue/message';
import Dropdown from 'primevue/dropdown';
import { supabase } from '../lib/supabase';
import { createProfile } from '../lib/profile';

const email = ref('');
const password = ref('');
const role = ref('student');
const roleOptions = [
  { label: 'Étudiant', value: 'student' },
  { label: 'Professeur', value: 'prof' },
  { label: 'Admin', value: 'admin' }
];
const terms = ref(false);
const loading = ref(false);
const message = ref(null);
const router = useRouter();

async function register() {
  if (!terms.value) {
    message.value = { severity: 'warn', text: 'Veuillez accepter les conditions.' };
    return;
  }
  loading.value = true;
  message.value = null;
  const { data, error } = await supabase.auth.signUp({ email: email.value, password: password.value });
  if (error) {
    message.value = { severity: 'error', text: error.message };
    loading.value = false;
    return;
  }
  // Création du profil dans la table 'profiles' avec le rôle choisi
  await createProfile(data.user, role.value);
  message.value = { severity: 'success', text: "Inscription réussie ! Vérifiez vos emails pour confirmer votre compte." };
  loading.value = false;
  setTimeout(() => router.push('/login'), 2000);
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 3rem auto;
}
</style>
