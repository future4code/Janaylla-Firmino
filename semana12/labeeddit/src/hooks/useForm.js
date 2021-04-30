import { useState } from "react";

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const AddEmoji = (key, emoji) => {
    setForm({ ...form, [key]: form[key]+emoji });
  }

  const resetForm = () => {
    setForm(initialForm);
  };

  return [form, onChange, resetForm, AddEmoji];
};