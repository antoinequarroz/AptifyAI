<template>
  <div class="dashboard-basic">
    <h2>Tableau de bord</h2>
    <div class="dashboard-grid">
      <div class="dashboard-card">
        <h3>Mes cours</h3>
        <ul>
          <li>Voir mes cours inscrits</li>
          <li>Accéder au contenu</li>
          <li>Progresser dans mes modules</li>
        </ul>
        <RouterLink to="/courses" class="dashboard-link">Accéder à mes cours</RouterLink>
      </div>
      <div class="dashboard-card">
        <h3>Abonnement</h3>
        <ul>
          <li>Voir mon statut d'abonnement</li>
          <li>Changer de formule</li>
          <li>Gérer le paiement</li>
        </ul>
        <RouterLink to="/subscription" class="dashboard-link">Gérer mon abonnement</RouterLink>
      </div>
      <div class="dashboard-card">
        <h3>Profil</h3>
        <ul>
          <li>Voir mes informations</li>
          <li>Modifier mon email/mot de passe</li>
          <li>Se déconnecter</li>
        </ul>
        <RouterLink to="/profile" class="dashboard-link">Mon profil</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.dashboard-basic {
  max-width: 1100px;
  margin: 3rem auto;
  padding: 2rem 1rem;
}
.dashboard-basic h2 {
  text-align: center;
  margin-bottom: 2.5rem;
}
.dashboard-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.dashboard-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 2rem 1.5rem;
  min-width: 270px;
  max-width: 320px;
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.dashboard-card h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #2196f3;
}
.dashboard-card ul {
  padding-left: 1.2em;
  margin-bottom: 1.5rem;
}
.dashboard-link {
  margin-top: auto;
  color: #42b983;
  font-weight: 500;
  text-decoration: underline;
  align-self: flex-end;
}
.dashboard-link:hover {
  color: #2196f3;
}
</style>
