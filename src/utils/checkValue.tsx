export default function checkValue(formValues, section, path) {
  if (formValues[section]) {
    return formValues[section][path];
  } else {
    return "";
  }
}
