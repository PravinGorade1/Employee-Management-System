import React, { useState } from "react";

let AddnewEmployee = (props) => {
    let [emp, setemp] = useState({
            
            Name: "",
            Dob: "",
            Contact: "",
            Email: "",
            Address: "",
            Department: "",
            Destination: "",
            Salary: "",
    });

    let [list, setlist] = useState([]);

    let Unihandler = (e) => {
        setemp((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    let Saveinfo = () => {
        const uplist = [...list, emp];

        setlist(uplist);
        alert(uplist.length);

        props.parentCallBack(uplist);

       
        setque({
            Name: "",
            Dob: "",
            Contact: "",
            Email: "",
            Address: "",
            Department: "",
            Destination: "",
            Salary: "",
        });
    };

    return (<>
        <div className="container">
            <div className="container bg-info py-4 mt-5">
                <h2 className="text-center">Add-New-Employee</h2>
                <label className="f mt-5">Entert the Name</label>
                <input className="form-control" type="text" name="Name" value={emp.Name} onChange={(e) => Unihandler(e)} />

                <div className="row">
                    <div className="col">
                    <label className="f mt-5">Entert the DOB</label>
                        <input className="form-control" type="date" name="Dob" value={emp.Dob} onChange={(e) => Unihandler(e)} />
                    </div>

                    <div className="col">
                    <label className="f mt-5">Entert the Contact</label>
                        <input className="form-control" type="number" name="Contact" value={emp.Contact} onChange={(e) => Unihandler(e)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                    <label className="f mt-5">Entert the Email</label>
                        <input className="form-control" type="text" name="Email" value={emp.Email} onChange={(e) => Unihandler(e)} />
                    </div>

                    <div className="col">
                    <label className="f mt-5">Entert the Address</label>
                        <input className="form-control" type="text" name="Address" value={emp.Address} onChange={(e) => Unihandler(e)} />
                    </div>
                </div>


                <div className="row">
                    <div className="col">
                    <label className="f mt-5">Entert the Department</label>
                        <input className="form-control" type="text" name="Department" value={emp.Department} onChange={(e) => Unihandler(e)} />
                    </div>

                    <div className="col">
                    <label className="f mt-5">Entert the Destination</label>
                        <input className="form-control" type="text" name="Destination" value={emp.Destination} onChange={(e) => Unihandler(e)} />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                    <label className="f mt-5">Entert the Salary</label>
                        <input className="form-control" type="text" name="Salary" value={emp.Salary} onChange={(e) => Unihandler(e)} />
                    </div>

                    <div className="col">
                        <button className="btn btn-primary w-100 mt-5" type="button" onClick={Saveinfo}>Add Employee</button>
                    </div>
                </div>
                

            </div>
        </div>
    </>);
};
export default AddnewEmployee;
