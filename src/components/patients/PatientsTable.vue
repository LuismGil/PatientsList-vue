<template>
  <div>
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th>Nome</th>
          <th>Data de Nascimento</th>
          <th>CPF</th>
          <th>Email</th>
          <th>
            <input
              type="button"
              class="btn btn-succes btn-xs test"
              value="+ Adicionar Paciente"
              @click="openModal"
            >
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-show="!patients.length"
          style="color: black"
        >
          Não tem pacientes cadastrados
        </tr>
        <tr
          v-for="(t, i) in patients"
          :key="t"
        >
          <td>{{ t.name }}</td>
          <td>{{ t.date }}</td>
          <td>{{ t.cpf }}</td>
          <td>{{ t.email }}</td>
          <td>
            <button @click="removePatient(i)">
              x
            </button>
            <button @click="editModal(t)">
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <PatientsModal
      v-show="myModal"
      :selected-patient="selectedPatient"
      :action-button="actionButton"
      :dynamic-title="dynamicTitle"
      @closex="closeMyModal"
    />
  </div>
</template>

<script>
import PatientsModal from './PatientsModal.vue';

export default {
  name: 'PatientsTable',
  components: { PatientsModal },
  data() {
    return {
      patients: [],

      newPatient: {
        name: '',
        date: '',
        cpf: '',
        email: '',
      },
      selectedPatient: {},

      actionButton: '',
      dynamicTitle: '',
      myModal: false,
    };
  },

  created() {
    this.patients = JSON.parse(localStorage.getItem('patients')) || [];
  },

  methods: {
    openModal() {
      this.myModal = true;
      this.actionButton = 'Adicionar';
      this.dynamicTitle = 'Adicionar novo paciente';
    },
    closeMyModal() {
      this.selectedPatient = {};
      this.myModal = false;
    },
    editModal(t) {
      this.selectedPatient = t;
      this.myModal = true;
    },

    removePatient(index) {
      this.patients.splice(index, 1);
      localStorage.setItem('patients', JSON.stringify(this.patients));
    },
  },
};
</script>

<style>
.test {
  color: #fff;
}
</style>
