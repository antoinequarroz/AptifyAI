<template>
  <div class="profile-container">
    <Card>
      <template #title>Profil utilisateur</template>
      <template #content>
        <div v-if="user">
          <p><b>Email :</b> {{ user.email }}</p>
          <p><b>ID :</b> {{ user.id }}</p>
          <p><b>Status :</b> {{ user.email_confirmed_at ? 'Confirmé' : 'Non confirmé' }}</p>
          <Button label="Se déconnecter" icon="pi pi-sign-out" class="p-button-danger" style="margin-top:1.5rem;" @click="logout" />
        </div>
        <div v-else>
          <Message severity="warn">Aucun utilisateur connecté.</Message>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Card from 'primevue/card';
import Message from 'primevue/message';
import Button from 'primevue/button';
import { supabase } from '../lib/supabase';
import { useRouter } from 'vue-router';

const user = ref(null);
const router = useRouter();

async function fetchUser() {
  const { data } = await supabase.auth.getUser();
  user.value = data.user;
}

onMounted(fetchUser);
supabase.auth.onAuthStateChange(() => {
  fetchUser();
});

async function logout() {
  await supabase.auth.signOut();
  router.push('/login');
}
</script>

<style scoped>
.profile-container {
  max-width: 400px;
  margin: 3rem auto;
}
</style>
