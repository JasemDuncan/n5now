import React, { useState } from 'react'


export const useForm = (initialObject={}) => {

    const [form,setForm] = useState(initialObject);

    const formSerialization = (form)=>{
        
        const formData = new FormData(form);

        const completeObject = {};

        for (let[name, value]of formData){
            completeObject[name] = value;
        }
        return completeObject;
    };

    const sent = (e)=>{
        e.preventDefault();

        let permission = formSerialization(e.target);

        setForm(permission);

        // document.querySelector("");
        
    };

    const changed = ({target}) => {
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value
        });
    };

  return {
    form,
    sent,
    changed
    }
}



