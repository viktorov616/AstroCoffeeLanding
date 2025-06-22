export const getClassList = (baseClass: string, modifiers = '') => {
  if (!modifiers) return baseClass;

  return [baseClass, ...modifiers.split(' ').map((modifier => `${baseClass}--${modifier}`))]
}