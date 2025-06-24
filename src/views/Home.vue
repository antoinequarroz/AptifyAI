<template>
  <div class="landing-container">
    <!-- Hero Section -->
    <section class="hero">
      <img src="/vite.svg" alt="Logo AptifyAI" class="logo" />
      <h1>AptifyAI</h1>
      <h2>La plateforme e-learning nouvelle génération</h2>
      <p>Apprends, progresse et booste ta carrière grâce à l’IA, à un abonnement flexible et à une expérience ultra-moderne.</p>
      <Button label="Commencer maintenant" class="p-button-lg p-button-success" @click="$router.push('/register')" style="margin-top:1.5rem;" />
    </section>

    <Divider />

    <!-- Fonctionnalités -->
    <section class="features">
      <h3>Pourquoi choisir AptifyAI&nbsp;?</h3>
      <div class="features-list">
        <Card>
          <template #title>IA intégrée</template>
          <template #content>
            <p>Génération de contenu, recommandations personnalisées, analyse de texte… L’IA au service de ton apprentissage.</p>
          </template>
        </Card>
        <Card>
          <template #title>Abonnement flexible</template>
          <template #content>
            <p>Accès illimité à tous les cours avec gestion d’abonnement et paiement sécurisé via LemonSqueezy.</p>
          </template>
        </Card>
        <Card>
          <template #title>Expérience moderne</template>
          <template #content>
            <p>Vue 3, PrimeVue, Vite et Supabase pour une interface rapide, fluide et agréable.</p>
          </template>
        </Card>
      </div>
    </section>

    <Divider />

    <!-- Étapes -->
    <section class="steps">
      <h3>Comment ça marche&nbsp;?</h3>
      <ol>
        <li>Crée ton compte en 1 clic</li>
        <li>Choisis ton abonnement</li>
        <li>Accède à tous les cours et profite de l’IA</li>
      </ol>
    </section>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
</script>

<style scoped>
.landing-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.hero {
  text-align: center;
  margin-bottom: 2.5rem;
}
.logo {
  width: 70px;
  margin-bottom: 1rem;
}
.features {
  margin: 2rem 0;
}
.features-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}
.features-list .p-card {
  min-width: 240px;
  flex: 1 1 260px;
}
.steps {
  text-align: center;
  margin-top: 2rem;
}
.steps ol {
  display: inline-block;
  text-align: left;
  margin: 1rem auto 0 auto;
  padding-left: 1.2rem;
}
@media (max-width: 700px) {
  .features-list {
    flex-direction: column;
    align-items: center;
  }
}
</style>
