function formatPhoneNumber(string) {
  if (typeof string !== "string") {
    return string;
  }
  let phone = string.match(/[0-9]*/g).join("");
  if (phone.length >= 10) {
    phone =
      "(" +
      phone.slice(0, 3) +
      ") " +
      phone.slice(3, 6) +
      "-" +
      phone.slice(6, 10);
    return phone;
  } else {
    return string;
  }
}

export default formatPhoneNumber;
