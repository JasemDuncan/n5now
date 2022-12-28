import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Global } from '../../helpers/Global';
import { useParams } from 'react-router-dom';


export const Permission = () => {

  const [permission, setPermission] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    setTimeout(() => {
      axios.get(Global.url + "GetPermissions"
      ).then(
        response => {
          // setPermissions(response.data);
          setLoading(false);
          setPermission(response.data.filter(index => index.id == params.id));
        }
      )
    }, 500)
  };

  return (
    <>
      {
        loading ? "LOADING..." :
          permission.length == 1 ?
            (
              <div>
                <article key={permission[0].id}>
                  <h3>{permission[0].id}</h3>
                  <p>{permission[0].employeeForename + " " + permission[0].employeeSurname}</p>
                  <p>{"Permission Type: " + permission[0].permissionType}</p>
                  <p>{"Permission Date: " + permission[0].permissionDate}</p>

                </article>
              </div>          
            )
            : <h1>No items</h1>
      }
    </>
  )
}
