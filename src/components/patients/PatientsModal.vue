<template>
  <div>
    <transition name="model">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">
                  {{ dynamicTitle }}
                </h4>
                <button
                  type="button"
                  class="btn"
                  @click="close"
                >
                  <i class="far fa-window-close" />
                </button>
              </div>
              <div class="modal-body">
                <form class="modal-input">
                  <input
                    v-model="newPatient.name"
                    type="text"
                    placeholder="Nome"
                    required
                  >

                  <input
                    v-model="newPatient.date"
                    type="date"
                    placeholder="Data de nascimento"
                    required
                  >

                  <input
                    v-model="newPatient.cpf"
                    type="text"
                    placeholder="CPF"
                    required
                  >

                  <input
                    v-model="newPatient.email"
                    type="email"
                    placeholder="E-mail"
                    required
                  >
                </form>

                <br>
                <div
                  align="center"
                  class="modal-btn"
                >
                  <input type="hidden">

                  <input
                    v-model="actionButton"
                    type="button"
                    class="btn btn-success m-1"
                    @click="addPatient"
                  >

                  <button
                    class="btn btn-danger m-1"
                    @click="cancel"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'PatiensModal',
  props: {
    selectedPatient: Object,
    actionButton: String,
    dynamicTitle: String,
  },
  data() {
    return {

      patients: [],
      newPatient: {
        name: '',
        date: '',
        cpf: '',
        email: '',
      },
      myModal: false,
    };
  },

  watch: {
    selectedPatient(newVal) {
      this.actionButton = 'Salvar';
      this.dynamicTitle = 'Editar paciente';
      this.newPatient.name = newVal.name;
      this.newPatient.date = newVal.date;
      this.newPatient.cpf = newVal.cpf;
      this.newPatient.email = newVal.email;
    },
  },

  created() {
    this.patients = JSON.parse(localStorage.getItem('patients')) || [];
  },

  methods: {
    close() {
      this.$emit('closex');
    },
    addPatient() {
      if (
        !this.newPatient.name
        || !this.newPatient.date
        || !this.newPatient.cpf
        || !this.newPatient.email
      ) {
        return;
      }

      this.patients.push({
        name: this.newPatient.name,
        date: this.newPatient.date,
        cpf: this.newPatient.cpf,
        email: this.newPatient.email,
      });

      localStorage.setItem('patients', JSON.stringify(this.patients));

      this.newPatient.name = '';
      this.newPatient.date = '';
      this.newPatient.cpf = '';
      this.newPatient.email = '';
    },

    cancel() {
      this.newPatient.name = '';
      this.newPatient.date = '';
      this.newPatient.cpf = '';
      this.newPatient.email = '';
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.3s ease;
  width: 100%;
  z-index: 9998;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-input {
  display: flex;
  flex-direction: column;
}

.modal-input > input {
  padding: 10px;
  margin: 10px;
}

.modal-btn {
  margin-bottom: 15px;
}

</style>
