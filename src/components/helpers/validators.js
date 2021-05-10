/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable radix */
// eslint-disable-next-line import/prefer-default-export
export const notCpf = (value) => {
  const patients = JSON.parse(localStorage.getItem('patients'));
  const cpfValidation = patients.findIndex((
    (patient) => patient.cpf === value
  ));

  return !patients[cpfValidation];
};

export const notEmail = (value) => {
  const patients = JSON.parse(localStorage.getItem('patients'));
  const emailValidation = patients.findIndex((
    (patient) => patient.email === value
  ));

  return !patients[emailValidation];
};

/*
 *  Validates a CPF number
 *  @param   String:  cpfString     // User CPF (just numbers or formated(000.000.000-00))
 *  @return  Boolean: success/false // Returns if is valid
 *  Reference and logic: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
 *  Official code: http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
 */

export const validateCPF = (cpfString) => {
  let validated = false; // Start with false

  // Checking cpf lenght
  if (cpfString.length !== 14 && cpfString.length !== 11) {
    return validated;
  }

  // Checking for "formated cpf (000.000.000-00)" and replace "points"
  if (cpfString.length === 14) {
    cpfString = cpfString.replace('.', '');
    cpfString = cpfString.replace('.', '');
    cpfString = cpfString.replace('-', '');
  }

  // Variables to check cpf valid (sum and rest)
  let sum = 0;
  let rest = 0;

  // Checking for "null" CPF
  if (cpfString === '00000000000') {
    return validated;
  }

  // sum numbers
  for (let i = 1; i <= 9; ++i) {
    sum += parseInt(cpfString.substring(i - 1, i)) * (11 - i);
  }

  // Getting rest
  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) {
    rest = 0;
  }

  if (rest != parseInt(cpfString.substring(9, 10))) {
    return validated;
  }

  validated = true;
  return validated;
};
