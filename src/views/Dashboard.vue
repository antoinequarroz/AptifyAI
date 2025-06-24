<template>
  <div class="dashboard-container">
    <Card v-if="profile && profile.role === 'admin'">
      <template #content>
        <AdminDashboard />
      </template>
    </Card>
    <Card v-else>
      <template #title>Dashboard</template>
      <template #content>
        <div v-if="loading">
          <ProgressSpinner style="width:40px;height:40px" strokeWidth="5" />
        </div>
        <div v-else-if="!profile">
          <Message severity="error">Impossible de charger le profil utilisateur.</Message>
        </div>
        <div v-else>
          <div v-if="profile.role === 'admin'">
            <h3>Section Administrateur</h3>
            <ul>
              <li>Statistiques globales</li>
              <li>Gestion des utilisateurs</li>
              <li>Gestion des abonnements</li>
              <li>Gestion des cours et classes</li>
              <li>Création de compte</li>
            </ul>
          </div>
          <div v-else-if="profile.role === 'prof'">
            <h3>Section Professeur</h3>
            <ul>
              <li>Mes cours (création/édition)</li>
              <li>Gestion de mes classes/groupes</li>git
              <li>Suivi des étudiants</li>
            </ul>
          </div>
          <div v-else>
            <h3>Section Étudiant</h3>
            <ul>
              <li>Mes cours suivis</li>
              <li>Rendre des travaux/exercices</li>
              <li>Voir mes résultats</li>
            </ul>
          </div>
          <Divider />
          <Button label="Se déconnecter" icon="pi pi-sign-out" class="p-button-danger" @click="logout" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Message from 'primevue/message';
import ProgressSpinner from 'primevue/progressspinner';
import { useRouter } from 'vue-router';
import { supabase } from '../lib/supabase';
import { getProfile } from '../lib/profile';
import { ref, onMounted } from 'vue';
import AdminDashboard from './AdminDashboard.vue';

const router = useRouter();
const profile = ref(null);
const loading = ref(true);

async function fetchProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    loading.value = false;
    return;
  }
  profile.value = await getProfile(user.id);
  loading.value = false;
}

onMounted(fetchProfile);
supabase.auth.onAuthStateChange(() => {
  fetchProfile();
});

async function logout() {
  await supabase.auth.signOut();
  router.push('/login');
}
</script>

<style scoped>
.dashboard-container {
  max-width: 900px;
  margin: 3rem auto;
}
</style>
