<template>
  <div>
    <h3>{{ mainTitle }}</h3>
    <PatientsTable />
  </div>
</template>

<script>
import PatientsTable from './PatientsTable.vue';

export default {
  name: 'PatientsScreen',
  components: {
    PatientsTable,
  },
  data() {
    return {
      mainTitle: 'Lista de Pacientes',
    };
  },
};
</script>

<style></style>
