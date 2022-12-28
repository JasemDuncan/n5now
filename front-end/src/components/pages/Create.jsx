import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Global } from '../../helpers/Global';
import { useEffect } from 'react';
import axios from 'axios';

export const Create = () => {

  const { form, sent, changed } = useForm({});
  const [result, setResult] = useState(false);

  const savePermission = async (e) => {
    e.preventDefault(form);
    //Retreive info
    axios.post(Global.url + "RequestPermission", form)
      .then(response=>{
        setResult(response.data);
        console.log(response.data);
        if (response.data.success ===true){
          setResult(true);
        } else {setResult(false)}
      })
   
  };


  return (
    <div>
      <h1>Create permission</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis deserunt delectus illum cum sunt commodi. Eaque sapiente dicta laborum eum voluptatem doloribus ea cupiditate eveniet, dolor vero commodi qui.</p>
      <pre>{JSON.stringify(form)}</pre>
      <div>jaseas </div>
      <strong>{result ? "Permission Saved." : "Permission not saved."}</strong>
      {/*Mount form */}

      <form action="" onSubmit={savePermission}>

        <div className="">
          <label htmlFor="forname">Forname</label>
          <input type="text" name='employeeForename' onChange={changed} />
        </div>

        <div className="">
          <label htmlFor="surname">Surname</label>
          <input type="text" name='employeeSurname' onChange={changed} />
        </div>


        <div className="">
          <label htmlFor="permissionType">Permission Type</label>
          <input type="number" name='permissionType' onChange={changed} />
        </div>

        <div className="">
          <label htmlFor="permissionDate">Permission Date</label>
          <input type="text" name='permissionDate' onChange={changed} />
        </div>

        <input type="submit" value="Save" />
      </form>

    </div>
  )
}
