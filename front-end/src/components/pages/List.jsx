import React from 'react'
import { Link } from 'react-router-dom';

export const List = ({permissions, setPermission}) => {
    return (
        permissions.map(permission => {
            return (
                <article key={permission.id}>
                    <h3><Link to={"/permission/"+permission.id}>{permission.id}</Link></h3>
                    <p>{permission.employeeForename + " " + permission.employeeSurname}</p>
                    <p>{"Permission Type: " + permission.permissionType}</p>
                    <p>{"Permission Date: " + permission.permissionDate}</p>
                    <Link to={"/edit/"+permission.id}>Edit</Link>
                    <button>Delete</button>
                </article>
            );
        })
    )
}
