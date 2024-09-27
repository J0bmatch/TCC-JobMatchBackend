import React, { useState } from 'react';
import App from "./App.tsx";

const vagaCriacao: React.FC=()=>{
    //Estado para armazenar os dados do formulário
    const [formData,setFormData]=useState({
        title:'',
        role:'',
        description:'',
        salary:'',
        googleFormLink:''
    });
    //Funcao para atualizar o estado quando o usuario digitar nos campos
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      //Funcao para manipular o envio do formulário
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Vaga adicionada:', formData);
        // adicionar a lógica para enviar os dados para um servidor ou API
      };
      const FormVaga =()=>{
      return <form>
        <div>
            <label>Digite o título da vaga</label>
            <input type='text' placeholder='Digite o título'></input>
        </div>
        <div>
            <label>Função a exercer</label>
            <input type='text' placeholder='Digite a função'></input>
        </div>
        <div>
            <label>Descreva a vaga</label>
            <input type='text' placeholder='Descreva os serviços'></input>
        </div>
        <div>
            <label>Faixa Salarial</label>
            <input type='number' placeholder='Digite o salário'></input>
        </div>
        <div>
            <label>Riscos Presentes</label>
            <input type='text' placeholder='Digite a função'></input>
        </div>

      </form>;
    }
    export default FormVaga;
}
