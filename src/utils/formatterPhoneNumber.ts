export default function formatterPhoneNumber(inputValue: string) {
  let formattedValue = "+7";
  if (inputValue.length > 1) {
    formattedValue += " (" + inputValue.substring(1, 4);
  }
  if (inputValue.length > 4) {
    formattedValue += ") " + inputValue.substring(4, 7);
  }
  if (inputValue.length > 7) {
    formattedValue += "-" + inputValue.substring(7, 9);
  }
  if (inputValue.length > 9) {
    formattedValue += "-" + inputValue.substring(9, 11);
  }
  return formattedValue
}
