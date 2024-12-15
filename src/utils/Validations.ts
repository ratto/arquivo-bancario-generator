const ValidateField = (value: any) => {
  if (!value) return 'Este campo é obrigatório';

  return true;
};

export { ValidateField };
