import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Global } from '../../helpers/Global';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert';

export const Edit = () => {
  const [forename, setForename] = useState("");
  const [surname, setSurname] = useState("");
  const [perType, setPerType] = useState("");
  const [perDate, setPerDate] = useState("");
  const [message, setMessage] = useState("");


  const { form, sent, changed } = useForm({});
  const [result, setResult] = useState(false);
  const [permission, setPermission] = useState([]);
  const params = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    getPermission();

  }, []);

  const getPermission = async () => {

    axios.get(Global.url + "GetPermissions"
    ).then(
      response => {
        setPermission(response.data.filter(index => index.id == params.id));
      }
    )

  };

  const aux = () => {

  }

  const editPermission = async (e) => {
    e.preventDefault();

    axios.put(Global.url + "ModifiyPermission", 
    {
      id: e.target.id.value,
      employeeForename: forename==""?permission[0].employeeForename:forename,
      employeeSurname: surname==""?permission[0].employeeSurname:surname,
      permissionType: perType==""?permission[0].permissionType:perType,
      permissionDate: perDate==""?permission[0].permissionDate:perDate,

    })
      .then(response => {
        setResult(response.data);
        if (response.data.success === true) {
          setResult(true);
          setMessage("User Edited Successfully");
        } else {
          setResult(false);
          setMessage("Some error ocurred");
        }
      })
  };

  const handleChange = (event) => {
    setPerType(event.target.value);
  };

  return (

    <Paper
      sx={{
        p: 3,
        margin: 'auto',
        maxWidth: 1400,
        flexGrow: 1,
        backgroundColor: '#304f74',
        color: 'white'
      }}>
      <Grid container spacing={{ xs: 5, md: 6 }} sx={{ flexGrow: 1 }} columns={{ xs: 4, sm: 12, md: 12 }} >
        <Card sx={{ minWidth: 400, margin: 'auto', maxWidth: 800, minHeight: 500, mt: 5, display: 'flex' }}>
          <CardContent>
            <div>
              {
                permission.length == 1 ?
                  (
                    <div>
                      <Typography align="center" variant="h5" m={2}>Edit permission</Typography>

                      <form onSubmit={editPermission}>

                        <Box  sx={{ p: 1 }}>
                          <input type="hidden" name="id" defaultValue={permission[0].id} readOnly />
                        </Box>

                        <Box  sx={{ p: 1 }}>                          
                          <TextField
                            name="employeeForename"
                            label={permission[0].employeeForename}
                            
                            onChange={e => { setForename(e.target.value) }}
                            sx={{ minWidth: 400 }}
                          />                          
                        </Box>

                        <Box  sx={{ p: 1 }}>                          
                          <TextField
                            name="employeeSurname"
                            label={permission[0].employeeSurname}                            
                            onChange={e => { setSurname(e.target.value) }}
                            sx={{ minWidth: 400 }}
                          />                          
                        </Box>

                        <Box sx={{ p: 1 }}>                          
                          <FormControl>                            
                            <Select 
                              id="demo-select-small"
                              value={perType ? perType : permission[0].permissionType}                              
                              name="permissionType"
                              onChange={handleChange}
                              sx={{ minWidth: 400 }}
                            >
                              <MenuItem value={1}>Admin</MenuItem>
                              <MenuItem value={2} >User</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>

                        <Box  sx={{ p: 1 }}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}  >
                            <DatePicker
                              label="Permission Date"
                              renderInput={(params) => <TextField sx={{ minWidth: 400 }} name='permissionDate' {...params} />}
                              value={perDate ? perDate : permission[0].permissionDate}
                              onChange={(newValue) => {
                                setPerDate(newValue);
                              }}
                            />
                          </LocalizationProvider>
                        </Box>
                        <Box  sx={{ p: 1 }}>
                          <Button sx={{ minWidth: 400 }} type="submit" size="medium" value="Save" variant="contained">SAVE</Button>
                        </Box>
                        <Box  sx={{ p: 1 }}>
                          <Alert severity={result ? "success" : (message != "" ? "error" : "info")}>{message}</Alert>
                        </Box>
                      </form>
                    </div>
                  )
                  : <h1>Loading</h1>
              }
            </div>

          </CardContent>
        </Card>
      </Grid>
    </Paper >
  )
}
