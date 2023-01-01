import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Global } from '../../helpers/Global';
import { List } from './List';

export const Permissions = () => {

  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    
      axios.get(Global.url + "GetPermissions"
      ).then(
        response => {
          setPermissions(response.data);
          setLoading(false);
        }
      )
    
  };

  return (
    <>
      {loading ? "LOADING..." :
        permissions.length >= 1 ?
          <List permissions={permissions} setPermission={setPermissions} />
          : <h1>No items</h1>
      }
    </>
  )
}
