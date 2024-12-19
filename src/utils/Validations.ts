const isRequired = (value: string) => {
  const regex = /[0-9a-zA-Z]/;
  if (!!value && regex.test(value)) return true;

  return 'Este campo é obrigatório';
};

const maxLength = (max: number) => {
  return (value: string) => {
    if (!value) return true;
    return value.length <= max || `Não pode ultrapassar ${max} caracteres`;
  };
};

export { isRequired, maxLength };
