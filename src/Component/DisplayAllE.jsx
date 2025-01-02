import React from "react";
import { NavLink } from "react-router-dom";
let DisplayAllE = (props) => {
    return (<>
        <div className="container-flude  mt-5">
            <div className="table-responsive bg-primary p-5">
                <h2>View All Employee Detail</h2>
                <table className="table table-striped-col table-bordered bg-light">
                    <thead>
                        <tr>
                            <th className="col">Name</th>
                            <th scope="col">Dob</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Departmant</th>
                            <th scope="col">Destination</th>
                            <th scope="col">salary</th>
                            <th scope="col">Delete And Update</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.Questionlist.map((e, index) => (
                            <tr>
                                <td className="bg-info text-light">{e.Name}</td>
                                <td className="bg-info text-light">{e.Dob}</td>
                                <td className="bg-info text-light">{e.Contact}</td>
                                <td className="bg-info text-light">{e.Email}</td>
                                <td className="bg-info text-light">{e.Address}</td>
                                <td className="bg-info text-light">{e. Department}</td>
                                <td className="bg-info text-light">{e. Destination}</td>
                                <td className="bg-info text-light">{e. Salary}</td>

                                <td
                                    className="btn btn-warning btn-sm w-50"
                                    onClick={() => props.handleUpdate(e.id)}
                                >
                                    Update
                                </td>

                                <td
                                    className="btn btn-info btn-sm w-50"
                                    onClick={() => props.handleDelete(e.id)}
                                >
                                    Delete
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>);
};
export default DisplayAllE;
