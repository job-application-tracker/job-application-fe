import { useState } from 'react';

export default function useForm(inputs = {}) {
  const [formState, setFormState] = useState({ ...inputs });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const clearForm = (updatedInfo, editing) => {
    editing ? setFormState(updatedInfo) : setFormState(inputs);
  };
  return { formState, handleChange, clearForm };
}
