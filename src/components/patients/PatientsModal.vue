<template>
  <div>
    <transition name="model">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">{{ dynamicTitle }}</h4>
                <button type="button" class="close" @click="myModel = false">
                  <span>x</span>
                </button>
              </div>
              <div class="modal-body flex">
                <input
                  type="text"
                  placeholder="Nome"
                  v-model="newPatient.name"
                />

                <input
                  type="date"
                  placeholder="Data de nascimento"
                  v-model="newPatient.date"
                />

                <input type="text" placeholder="CPF" v-model="newPatient.cpf" />

                <input
                  type="email"
                  placeholder="E-mail"
                  v-model="newPatient.email"
                />

                <br />
                <div align="center">
                  <input type="hidden" />
                  <input
                    type="button"
                    class="btn btn-success btn-xs"
                    v-model="actionButton"
                    @click="addPatient"
                  />
                  <button @click="cancel">Cancelar</button>
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
  data() {
    return {
      patients: [],

      newPatient: {
        name: '',
        date: '',
        cpf: '',
        email: ''
      },

      myModel: false,
      actionButton: 'Adicionar',
      dynamicTitle: 'Adicionar novo paciente'
    };
  },

  created() {
    this.patients = JSON.parse(localStorage.getItem('patients')) || [];
  },

  methods: {
    addPatient() {
      if (
        !this.newPatient.name ||
        !this.newPatient.date ||
        !this.newPatient.cpf ||
        !this.newPatient.email
      ) {
        return;
      }

      this.patients.push({
        name: this.newPatient.name,
        date: this.newPatient.date,
        cpf: this.newPatient.cpf,
        email: this.newPatient.email
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
    }
  }
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

.flex {
  display: flex;
  flex-direction: column;
}
</style>
