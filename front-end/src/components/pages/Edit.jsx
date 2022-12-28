import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Global } from '../../helpers/Global';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const Edit = () => {

  const { form, sent, changed } = useForm({});
  const [result, setResult] = useState(false);
  const [permission, setPermission] = useState([]);
  const params = useParams();

  useEffect(() => {
    getPermission();

  }, []);

  const getPermission = async () => {
    setTimeout(() => {
      axios.get(Global.url + "GetPermissions"
      ).then(
        response => {
          setPermission(response.data.filter(index => index.id == params.id));
        }
      )
    }, 500)
  };

  const aux = ()=>{
    
  }

  const editPermission = async (e) => {
    e.preventDefault();


    { console.log(JSON.stringify(form)) }
    //Retreive info
    axios.put(Global.url + "ModifiyPermission", {
      id: e.target.id.value,
      employeeForename: e.target.employeeForename.value,
      employeeSurname:e.target.employeeSurname.value,
      permissionType:e.target.permissionType.value,
      permissionDate:e.target.permissionDate.value

    })
      .then(response => {
        setResult(response.data);
        if (response.data.success === true) {
          setResult(true);
        } else { setResult(false) }
      })
  };


  return (
    <div>
      {
        permission.length == 1 ?
          (
            <div>
              
              <h1>Edit permission</h1>
              <p>Form to edit: {permission[0].id}</p>              
          
              <strong>{result ? "Permission Edited." : "Permission not Edited."}</strong>

              <form action="" onSubmit={editPermission}>

                <div className="">                  
                  <input type="text" name="id" defaultValue={permission[0].id}  readOnly />
                </div>

                <div className="">
                  <label htmlFor="forname">Forname</label>
                  <input type="text" name='employeeForename' defaultValue={permission[0].employeeForename} />
                </div>

                <div className="">
                  <label htmlFor="surname">Surname</label>
                  <input type="text" name='employeeSurname' defaultValue={permission[0].employeeSurname}  />
                </div>

                <div className="">
                  <label htmlFor="permissionType">Permission Type</label>
                  <input type="number" name='permissionType' defaultValue={permission[0].permissionType}  />
                </div>

                <div className="">
                  <label htmlFor="permissionDate">Permission Date</label>
                  <input type="text" name='permissionDate' defaultValue={permission[0].permissionDate}  />
                </div>

                <input type="submit" value="Save" />
              </form>
            </div>
          )
          : <h1>Loading</h1>

      }
    </div>
  )
}
