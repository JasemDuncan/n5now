import React, { useState } from 'react'

import { Global } from '../../helpers/Global';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

export const Create = () => {
  const [result, setResult] = useState(false);
  const [forename, setForename] = useState("");
  const [surname, setSurname] = useState("");
  const [perType, setPerType] = useState("");
  const [perDate, setPerDate] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post(Global.url + "RequestPermission", {

      employeeForename: forename,
      employeeSurname: surname,
      permissionType: perType,
      permissionDate: perDate,

    })
      .then(response => {
        setResult(response.data);
        console.log(response.data);
        if (response.data.success === true) {
          setResult(true);
          setForename("");
          setSurname("");
          setPerType("");
          setPerDate("");
          setMessage("Created Successfully");
        } else {
          setResult(false)
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
              <Typography align="center" variant="h5" m={2}> Create permission </Typography>

              <form onSubmit={handleSubmit} >
                <Box className="" sx={{ p: 1 }}>
                  <TextField
                    name="employeeForename"
                    label="Forname"
                    value={forename}
                    onChange={e => { setForename(e.target.value) }}
                    sx={{ minWidth: 400 }}
                  />
                </Box>

                <Box className="" sx={{ p: 1 }}>
                  <TextField
                    name="employeeSurname"
                    label="Surname"
                    value={surname}
                    onChange={e => { setSurname(e.target.value) }}
                    sx={{ minWidth: 400 }}
                  />
                </Box>

                <Box className="" sx={{ p: 1 }}>
                  <FormControl>
                    <InputLabel id="demo-select-small">Permission Type</InputLabel>
                    <Select
                      id="demo-select-small"
                      value={perType}
                      label="Permission Type"
                      name="permissionType"
                      onChange={handleChange}
                      sx={{ minWidth: 400 }}
                    >
                      <MenuItem value={1}>Admin</MenuItem>
                      <MenuItem value={2}>User</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className="" sx={{ p: 1 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker
                      label="Permission Date"
                      value={perDate != "" ? perDate : null}
                      onChange={(newValue) => {
                        setPerDate(newValue);
                      }}
                      renderInput={(params) => <TextField sx={{ minWidth: 400 }} {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <Box className="" sx={{ p: 1 }}>
                  <Button sx={{ minWidth: 400 }} type="submit" size="medium" value="Save" variant="contained">SAVE</Button>
                </Box>
                <Box className="" sx={{ p: 1 }}>
                  <Alert severity={result ? "success" : (message != "" ? "error" : "info")}>{message}</Alert>
                </Box>
              </form>

            </div>
          </CardContent>
        </Card>
      </Grid>
    </Paper >
  )
}
