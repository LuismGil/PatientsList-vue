<template>
  <div>
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th>Nome</th>
          <th>Data de Nascimento</th>
          <th>Email</th>
          <th>Cpf</th>
          <th>
            <input
              type="button"
              class="btn btn-succes btn-xs test"
              @click="openModal"
              value="Add"
            />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr style="color: black" v-show="!patients.length">
          Não tem pacientes cadastrados
        </tr>
        <tr v-bind:key="t" v-for="(t, i) in patients">
          <td>{{ t.name }}</td>
          <td>{{ t.date }}</td>
          <td>{{ t.cpf }}</td>
          <td>{{ t.email }}</td>
          <td>
            <button @click="removePatient(i)">x</button>
            <button @click="openModal">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <PatientsModal v-show="myModel" />
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
        email: ''
      },

      myModel: false
    };
  },

  created() {
    this.patients = JSON.parse(localStorage.getItem('patients')) || [];
  },

  methods: {
    openModal() {
      this.myModel = true;
    },
    closeMyModal() {
      this.myModel = false;
    },

    removePatient(index) {
      this.patients.splice(index, 1);
      localStorage.setItem('patients', JSON.stringify(this.patients));
    }
  }
};
</script>

<style>
.test {
  color: #fff;
}
</style>
