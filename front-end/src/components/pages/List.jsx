import { Grid } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const List = ({ permissions, setPermission }) => {
    const [perType, setPerType] = useState("");
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
            }}
        >

            <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                {
                    permissions.map(permission => {
                        return (
                            <Grid key={permission.id} item xs={4} sm={6} md={4}>
                                <div>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Employee Code: {permission.id}
                                            </Typography>
                                            <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                                Forname:
                                            </Typography>

                                            <Box className="" sx={{ p: 1 }}>
                                                <TextField 
                                                    name="employeeForename"
                                                    label={permission.employeeForename}
                                                    sx={{ minWidth: 400 }}
                                                    inputProps={
                                                        { readOnly: true, }}
                                                />
                                            </Box>

                                            <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                                Surname:
                                            </Typography>
                                            <Box className="" sx={{ p: 1 }} >
                                                <TextField 
                                                    name="employeeSurname"
                                                    label={permission.employeeSurname}
                                                    sx={{ minWidth: 400 }}
                                                    inputProps={
                                                        { readOnly: true, }}
                                                />
                                            </Box>

                                            <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                                Permission Type:
                                            </Typography>

                                            <FormControl sx={{ mt: 1.5 }} >
                                                <Select readOnly
                                                    id="demo-select-small"
                                                    value={perType ? perType : permission.permissionType}
                                                    name="permissionType"
                                                    onChange={handleChange}
                                                    sx={{ minWidth: 400 }}
                                                >
                                                    <MenuItem value={1}>Admin</MenuItem>
                                                    <MenuItem value={2}>User</MenuItem>
                                                </Select>

                                            </FormControl>
                                        </CardContent>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Button size="medium" variant='contained' component={Link} to={"/edit/" + permission.id} >Edit</Button>
                                            <Button size="medium" variant='contained' component={Link} to={"/edit/" + permission.id} >ERASE</Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Paper>
    )
}
