<template>
  <div>
    <transition name="model">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content modal-content_height">
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

              <div class="modal-body modal-body_overflow">
                <form class="modal-input">
                  <div class="form-group m-2">
                    <label for="name">Nome</label>
                    <input
                      v-model="newPatient.name"
                      name="name"
                      class="form-control"
                      type="text"
                      :class="{ 'is-invalid': submitted && $v.newPatient.name.$error }"
                    >
                    <div
                      v-if="submitted && !$v.newPatient.name.required"
                      class="invalid-feedback"
                    >
                      O nome é obrigatório
                    </div>
                  </div>

                  <div class="form-group m-2">
                    <label for="date">Data de Nascimento</label>
                    <input
                      v-model="newPatient.date"
                      name="date"
                      class="form-control"
                      type="date"
                      :class="{ 'is-invalid': submitted && $v.newPatient.date.$error }"
                    >
                    <div
                      v-if="submitted && !$v.newPatient.date.required"
                      class="invalid-feedback"
                    >
                      A data é obrigatória
                    </div>
                  </div>

                  <div>
                    <div
                      v-if="editPatient"
                      class="form-group m-2"
                    >
                      <label for="cpfNotEdit">CPF</label>
                      <input
                        v-model="newPatient.cpf"
                        name="cpfNotEdit"
                        class="form-control"
                        type="text"
                        :disabled="editPatient"
                      >
                    </div>
                    <div
                      v-else
                      class="form-group m-2"
                    >
                      <label for="cpf">CPF</label>
                      <input
                        id="cpf-id"
                        v-model="newPatient.cpf"
                        maxlength="14"
                        name="cpf"
                        class="form-control"
                        type="text"
                        :class="{ 'is-invalid': submitted && $v.newPatient.cpf.$error }"
                        @change="onChangeEvent"
                      >
                      <div
                        v-if="submitted && $v.newPatient.cpf.$error"
                        class="invalid-feedback"
                      >
                        <p v-if="!$v.newPatient.cpf.required">
                          O Cpf é obrigatório
                        </p>
                        <p v-if="!$v.newPatient.cpf.validateCpf">
                          O Cpf inserido não é válido
                        </p>
                        <p v-if="!$v.newPatient.cpf.notCpf">
                          O Cpf inserido já existe
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      v-if="editPatient"
                      class="form-group m-2"
                    >
                      <label for="emailNotEdit">E-mail</label>
                      <input
                        v-model="newPatient.email"
                        name="emailNotEdit"
                        class="form-control"
                        type="email"
                        :disabled="editPatient"
                      >
                    </div>
                    <div
                      v-else
                      class="form-group m-2"
                    >
                      <label for="email">E-mail</label>
                      <input
                        v-model="newPatient.email"
                        name="email"
                        class="form-control"
                        type="email"
                        :class="{ 'is-invalid': submitted && $v.newPatient.email.$error }"
                      >
                      <div
                        v-if="submitted && $v.newPatient.email.$error"
                        class="invalid-feedback"
                      >
                        <p v-if="!$v.newPatient.email.required">
                          O Email é obrigatório
                        </p>
                        <p v-if="!$v.newPatient.email.email">
                          O Email é inválido
                        </p>
                        <p v-if="!$v.newPatient.email.notEmail">
                          Um usuario com esse Email já existe
                        </p>
                      </div>
                    </div>
                  </div>
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
                    @click="updatePatient"
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
import { required, email } from 'vuelidate/lib/validators';
import { notCpf, notEmail, validateCPF } from '../helpers/validators';
import { formatCpf } from '../helpers/formatCpf';

export default {

  name: 'PatiensModal',
  props: {
    selectedPatient: {
      type: Object,
      default: () => {
      },
    },
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
      actionButton: 'Adicionar',
      dynamicTitle: 'Nuevo usuario',
      editPatient: false,
      submitted: false,
    };
  },

  validations: {
    newPatient: {
      name: { required },
      date: { required },
      cpf: {
        required,
        notCpf,
        validateCPF,
      },
      email: { required, email, notEmail },
    },
  },

  watch: {
    selectedPatient(newVal) {
      if (Object.keys(newVal).length) {
        this.newPatient.name = newVal.name;
        this.newPatient.date = newVal.date;
        this.newPatient.cpf = newVal.cpf;
        this.newPatient.email = newVal.email;

        this.dynamicTitle = `Editar usuario ${newVal.name}`;
        this.actionButton = 'Salvar';

        this.editPatient = true;
      }
    },
  },

  created() {
    this.patients = JSON.parse(localStorage.getItem('patients')) || [];
  },

  methods: {
    close() {
      this.$emit('closex');
      this.dynamicTitle = 'Nuevo usuario';
      this.actionButton = 'Adicionar';
      this.editPatient = false;
    },

    onChangeEvent({ target }) {
      formatCpf(target.value);
    },

    updatePatient() {
      this.submitted = true;
      this.$v.$touch();

      if (
        (
          this.$v.newPatient.$pending
          || this.$v.newPatient.$error
          || this.$v.newPatient.$invalid
        ) && !this.editPatient
      ) {
        return;
      }

      if (!this.editPatient) {
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

        window.location.reload();
      } else {
        const patientIndex = this.patients.findIndex((
          (patient) => patient.cpf === this.newPatient.cpf
        ));

        this.patients[patientIndex].name = this.newPatient.name;
        this.patients[patientIndex].date = this.newPatient.date;

        localStorage.setItem('patients', JSON.stringify(this.patients));

        window.location.reload();
      }
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

.modal-body_overflow {
  overflow-y: auto !important;
}

.modal-content_height {
  height: 90vh !important;
}

.modal-input {
  display: flex;
  flex-direction: column;
}

.modal-input > input {
  margin: 10px;
  padding: 10px;
}

.modal-btn {
  margin-bottom: 15px;
  margin-top: 30px;
}

div > label {
  margin-bottom: 5px;
}

</style>
