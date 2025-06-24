<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { supabase } from './lib/supabase';

const user = ref(null);
const router = useRouter();

async function fetchUser() {
  const { data } = await supabase.auth.getUser();
  user.value = data.user;
}

onMounted(fetchUser);

// Met à jour l'utilisateur lors d'un changement de session (login/logout)
supabase.auth.onAuthStateChange(() => {
  fetchUser();
});
</script>

<template>
  <nav style="margin-bottom: 2rem;">
    <RouterLink to="/">Accueil</RouterLink>
    <template v-if="!user">
      |
      <RouterLink to="/register">Inscription</RouterLink>
      |
      <RouterLink to="/login">Connexion</RouterLink>
    </template>
    <template v-else>
      |
      <RouterLink to="/dashboard">Dashboard</RouterLink>
      |
      <RouterLink to="/courses">Mes cours</RouterLink>
      |
      <RouterLink to="/subscription">Abonnement</RouterLink>
      |
      <RouterLink to="/profile">Profil</RouterLink>
      |
      <span style="color:#888; font-size:0.95em">{{ user.email }}</span>
    </template>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  text-align: center;
  margin-top: 2rem;
}
nav a {
  margin: 0 1rem;
  color: #2196f3;
  text-decoration: none;
  font-weight: bold;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
