import { BASE_URL} from "../constants/urls";
import axios from "axios";

export const newUser = (body, setSnack, setLoading) => {
  setLoading(true);
  setSnack({ text: "" })
  axios
    .post(`${BASE_URL}user`, body)
    .then((res) => {
      setLoading(false);
      setSnack({
        text: "New user dictionary",
        error: false
      });
    })
    .catch((err) => {
      setLoading(false);
      setSnack({
        text: err.message,
        error: true,
      });
    });
};

export const putBalance = (cpf, name, setSnack, setLoading) => {
  setLoading(true);
  setSnack({ text: "" })
  axios
    .put(`${BASE_URL}balance/update?name=${name}&cpf=${cpf}`)
    .then((res) => {
      setLoading(false);
      setSnack({
        text: "Update balance",
        error: false
      });
    })
    .catch((err) => {
      setLoading(false);
      setSnack({
        text: err.message,
        error: true,
      });
    });
};

export const newBalance = (cpf, name, bory, setSnack, setLoading) => {
  setLoading(true);
  setSnack({ text: "" })
  axios
    .put(`${BASE_URL}balance/new?name=${name}&cpf=${cpf}`, bory)
    .then((res) => {
      setLoading(false);
      setSnack({
        text: "Update balance",
        error: false
      });
    })
    .catch((err) => {
      setLoading(false);
      setSnack({
        text: err.message,
        error: true,
      });
    });
};

export const newPayment = (cpf, name, bory, setSnack, setLoading) => {
  setLoading(true);
  setSnack({ text: "" })
  axios
    .put(`${BASE_URL}payment?name=${name}&cpf=${cpf}`, bory)
    .then((res) => {
      setLoading(false);
      setSnack({
        text: "New payment",
        error: false
      });
    })
    .catch((err) => {
      setLoading(false);
      setSnack({
        text: err.message,
        error: true,
      });
    });
};

export const newTransfer = (cpf, name, bory, setSnack, setLoading) => {
  setLoading(true);
  setSnack({ text: "" })
  axios
    .post(`${BASE_URL}transfer?name=${name}&cpf=${cpf}`, bory)
    .then((res) => {
      setLoading(false);
      setSnack({
        text: "New transfer",
        error: false
      });
    })
    .catch((err) => {
      setLoading(false);
      setSnack({
        text: err.message,
        error: true,
      });
    });
};