import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormQueda() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Local do Evento" name="Local do Evento" ref={register({required: true, maxLength: 80})} />
      <input type="datetime" placeholder="Data e hora da queda" name="Data e hora da queda" ref={register({required: true, maxLength: 100})} />
      <input type="number" placeholder="Capacidade" name="Capacidade" ref={register({required: true})} />
      <input type="text" placeholder="Responsável" name="Responsável" ref={register({required: true, maxLength: 80})} />
      <select name="Afetação" ref={register({ required: true })}>
        <option value="Backbone">Backbone</option>
        <option value="Backbone/Clientes">Backbone/Clientes</option>
        <option value="Clientes">Clientes</option>
      </select>
      <textarea name="Resumo" ref={register({required: true})} />

      <input type="submit" />
    </form>
  );
}
