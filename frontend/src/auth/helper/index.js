import { API } from "../../backend";
import { cartEmpty } from "../../core/helper/cartHelper";

export const signUp = user => {
  return fetch(`${API}user/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const signin = user => {
  const formData = new FormData();

  for (const name in user) {
    formData.append(name, user[name]);
  }

  return fetch(`${API}user/login/`, {
    method: "POST",
    body: formData
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("token", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("token")) {
      return JSON.parse(localStorage.getItem("token"));
    } else {
      return false;
    }
  }
  return false;
};

export const signout = next => {
  const userId = isAuthenticated() && isAuthenticated().user.id;

  if (typeof window !== undefined) {
    localStorage.removeItem("token");
    cartEmpty(() => {});

    return fetch(`${API}user/logout/${userId}`, { method: "GET" })
      .then(response => {
        console.log("signout success");
        next();
      })
      .catch(err => {
        console.log(err);
      });
  }
};
