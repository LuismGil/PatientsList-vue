<template>
  <div>
    <h3>{{ mainTitle }}</h3>
    <PatientsTable />
  </div>
</template>

<script>
import PatientsTable from './PatientsTable.vue';
export default {
  data() {
    return {
      mainTitle: 'Lista de Pacientes'
    };
  },
  components: {
    PatientsTable
  }
};
</script>

<style></style>
