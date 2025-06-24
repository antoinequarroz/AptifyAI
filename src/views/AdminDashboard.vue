<template>
  <div class="admin-dashboard-container">
    <Card>
      <template #title>Administration</template>
      <template #content>
        <TabView v-model:activeIndex="tabIndex">
          <TabPanel header="Statistiques">
            <div class="charts-flex">
              <Chart type="pie" :data="userPieData" :options="pieOptions" style="width: 300px;" />
              <Chart type="bar" :data="courseBarData" :options="barOptions" style="width: 400px;" />
            </div>
          </TabPanel>
          <TabPanel header="Créer un compte">
            <CreateAccountForm />
          </TabPanel>
          <TabPanel header="Gestion des cours">
            <ManageCourses />
          </TabPanel>
          <TabPanel header="Gestion des classes">
            <ManageClasses />
          </TabPanel>
        </TabView>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Chart from 'primevue/chart';
import CreateAccountForm from './admin/CreateAccountForm.vue';
import ManageCourses from './admin/ManageCourses.vue';
import ManageClasses from './admin/ManageClasses.vue';

const tabIndex = ref(0);

// MOCK DATA pour les graphiques
const userPieData = {
  labels: ['Étudiants', 'Professeurs', 'Admins'],
  datasets: [{
    data: [120, 15, 3],
    backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
    hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D']
  }]
};

const courseBarData = {
  labels: ['Math', 'Physique', 'IA', 'Développement', 'Anglais'],
  datasets: [
    {
      label: 'Cours créés',
      backgroundColor: '#42A5F5',
      data: [12, 9, 7, 15, 10]
    }
  ]
};

const pieOptions = { plugins: { legend: { position: 'bottom' } } };
const barOptions = { plugins: { legend: { display: false } } };
</script>

<style scoped>
.admin-dashboard-container {
  max-width: 900px;
  margin: 3rem auto;
}
.charts-flex {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>
