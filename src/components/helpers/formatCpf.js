/** * CPF formatation ** */
// eslint-disable-next-line import/prefer-default-export
export const formatCpf = (cpfValue) => {
  const numeric = cpfValue.replace(/[^0-9]+/g, '');
  const cpfLength = numeric.length;

  const partOne = `${numeric.slice(0, 3)}.`;
  const partTwo = `${numeric.slice(3, 6)}.`;
  const partThree = `${numeric.slice(6, 9)}-`;

  const cpfInput = document.getElementById('cpf-id'); // here is the CPF ID of the input

  if (cpfLength < 4) {
    cpfInput.value = numeric;
  } else if (cpfLength >= 4 && cpfLength < 7) {
    const formatCPF = partOne + numeric.slice(3);
    cpfInput.value = formatCPF;
  } else if (cpfLength >= 7 && cpfLength < 10) {
    const formatCPF = partOne + partTwo + numeric.slice(6);
    cpfInput.value = formatCPF;
  } else if (cpfLength >= 10 && cpfLength < 12) {
    const formatCPF = partOne + partTwo + partThree + numeric.slice(9);
    cpfInput.value = formatCPF;
  } else if (cpfLength >= 12) {
    const formatCPF = partOne + partTwo + partThree + numeric.slice(9, 11);
    cpfInput.value = formatCPF;
  }

  return cpfInput.value;
};
