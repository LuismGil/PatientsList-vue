<template>
  <div>
    <table class="table text-center">
      <thead class="table-primary">
        <tr>
          <th>Nome</th>
          <th>Data de Nascimento</th>
          <th>CPF</th>
          <th>Email</th>
          <th>
            <button
              type="button"
              class="btn btn-succes btn-add"
              @click="openModal"
            >
              <i class="far fa-plus-square"> Adicionar Paciente
              </i>
            </button>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(t, i) in patients"
          :key="t.cpf"
          class="table-tr"
        >
          <td class="p-td">
            {{ t.name }}
          </td>
          <td class="p-td">
            {{ moment(t.date).format('DD-MM-YYYY') }}
          </td>
          <td
            class="p-td"
          >
            {{ t.cpf }}
          </td>
          <td class="p-td">
            {{ t.email }}
          </td>
          <td>
            <button
              class="btn"
              @click="removePatient(i)"
            >
              <i class="far fa-trash-alt" />
            </button>
            <button
              class="btn"
              @click="editModal(t)"
            >
              <i class="far fa-edit"> Editar</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h4
      v-show="!patients.length"
      style="color: black"
      class="text-center m-3"
    >
      Não tem pacientes cadastrados
    </h4>

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
      myModal: false,
    };
  },

  created() {
    this.patients = JSON.parse(localStorage.getItem('patients')) || [];
  },

  methods: {
    openModal() {
      this.myModal = true;
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
      window.location.reload();
    },
  },
};
</script>

<style>
.btn-add {
  padding:0;
}

.p-td {
  padding-top: 16px !important;
}

.table-tr:hover {
  background-color: rgb(236, 236, 252);
}
</style>
