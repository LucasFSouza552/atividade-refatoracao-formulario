import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    job: '',
    age: '',
    city: '',
    state: '',
    phone: '',
    github: ''
  });

  function handleFieldChange(e) {
    if (formData[e.target.name] === undefined) {
      return;
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/users', formData, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      alert('Usuário criado! ID: ' + response.data.id);
    } catch (error) {
      alert('Erro ao enviar os dados.');
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome" required name="name" value={formData.name} onChange={handleFieldChange} />
        <input placeholder="Email" required name="email" value={formData.email} onChange={handleFieldChange} />
        <input placeholder="Cargo" required name="job" value={formData.job} onChange={handleFieldChange} />
        <input placeholder="Idade" required name="age" value={formData.age} onChange={handleFieldChange} />
        <input placeholder="Cidade" required name="city" value={formData.city} onChange={handleFieldChange} />
        <input placeholder="Estado" required name="state" value={formData.state} onChange={handleFieldChange} />
        <input placeholder="Telefone" required name="phone" value={formData.phone} onChange={handleFieldChange} />
        <input placeholder="GitHub" required name="github" value={formData.github} onChange={handleFieldChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
