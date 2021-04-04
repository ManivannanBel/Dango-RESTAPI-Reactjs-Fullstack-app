import { API } from "../../backend";

export const getMeToken = (userId, token) => {
  return fetch(`${API}payment/gettoken/${userId}/${token}/`, {
    method: "GET"
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const processPayment = (userId, token, paymentInfo) => {
  const formData = new FormData();

  for (const name in paymentInfo) {
    formData.append(name, paymentInfo[name]);
  }

  return fetch(`${API}payment/process/${userId}/${token}/`, {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};
