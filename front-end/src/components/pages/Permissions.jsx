import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Global } from '../../helpers/Global';

export const Permissions = () => {

  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    setTimeout(() => {
      axios.get(Global.url + "GetPermissions"
      ).then(
        response => {
          setPermissions(response.data);
          setLoading(false);
        }
      )
    }, 500)


  };

  return (
    <>
      {loading ? "LOADING" :
        permissions.length >= 1 ?
          (
            permissions.map(permission => {
              return (
                <article key={permission.id}>
                  <h3>{permission.id}</h3>
                  <p>{permission.employeeForename + " " + permission.employeeSurname}</p>
                  <p>{"Permission Type: " + permission.permissionType}</p>
                  <p>{"Permission Date: " + permission.permissionDate}</p>
                  <button>Editar</button>
                  <button>Borrar</button>
                </article>
              );
            })
          )
          :
          (
            <h1>No items</h1>
          )
      }

    </>
  )
}
