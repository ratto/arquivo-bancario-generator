const isRequired = (value: string) => {
  const regex = /[0-9a-zA-Z]/;
  if (regex.test(value)) return true;

  return 'Este campo é obrigatório';
};

const maxLength = (value: string, maxLength: number) => {
  if (value.length <= maxLength) return true;

  return `Não pode ultrapassar ${maxLength} caracteres`;
};

export { isRequired, maxLength };
