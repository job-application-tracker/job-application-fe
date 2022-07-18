import { useState } from 'react';

export default function useForm(inputs = {}) {
  const [formState, setFormState] = useState({ ...inputs });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(formState);
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const clearForm = () => {
    for (let key in formState) {
      setFormState((prev) => ({ ...prev, [key]: '' }));
    }
  };
  return { formState, handleChange, clearForm };
}
