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

  const clearForm = (updatedInfo) => {
    setFormState(updatedInfo);
  };
  return { formState, handleChange, clearForm };
}
