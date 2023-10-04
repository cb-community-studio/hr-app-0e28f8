import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleEmployeePage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("employee")
            .get(urlParams.singleEmployeeId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Employee", type: "error", message: error.message || "Failed get employee" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/employee", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Employee</h3>
                </div>
                <p>employee/{urlParams.singleEmployeeId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">First</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.first}</p></div>
                    <label className="text-sm text-primary">Name </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.name}</p></div>
                    <label className="text-sm text-primary">Last</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.last}</p></div>
                    <label className="text-sm text-primary">Name  1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.name1}</p></div>
                    <label className="text-sm text-primary">Employee</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.employee}</p></div>
                    <label className="text-sm text-primary">Date</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.date}</p></div>
                    <label className="text-sm text-primary">Of</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.offf}</p></div>
                    <label className="text-sm text-primary">Birth </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.birth}</p></div>
                    <label className="text-sm text-primary">Gender </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.gender}</p></div>
                    <label className="text-sm text-primary">Phone </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.phone}</p></div>
                    <label className="text-sm text-primary">Email </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.email}</p></div>
                    <label className="text-sm text-primary">Address </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.address}</p></div>
                    <label className="text-sm text-primary">Employment</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.employment}</p></div>
                    <label className="text-sm text-primary">Status </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.status}</p></div>
                    <label className="text-sm text-primary">Hire</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.hire}</p></div>
                    <label className="text-sm text-primary">Termination</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.termination}</p></div>
                    <label className="text-sm text-primary">Date  1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.date1}</p></div>
                    <label className="text-sm text-primary">Job</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.job}</p></div>
                    <label className="text-sm text-primary">Title </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.title}</p></div>
                    <label className="text-sm text-primary">Department </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.department}</p></div>
                    <label className="text-sm text-primary">Manager Supervisor </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.managerSupervisor}</p></div>
                    <label className="text-sm text-primary">Salary</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.salary}</p></div>
                    <label className="text-sm text-primary">Information </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.information}</p></div>
                    <label className="text-sm text-primary">Benefits</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.benefits}</p></div>
                    <label className="text-sm text-primary">Information  1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.information1}</p></div>
                    <label className="text-sm text-primary">Emergency</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.emergency}</p></div>
                    <label className="text-sm text-primary">Contact</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.contact}</p></div>
                    <label className="text-sm text-primary">Details </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.details}</p></div>
                    <label className="text-sm text-primary">Work</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.work}</p></div>
                    <label className="text-sm text-primary">Location </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.location}</p></div>
                    <label className="text-sm text-primary">Work 1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.work1}</p></div>
                    <label className="text-sm text-primary">Schedule</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.schedule}</p></div>
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleEmployeePage);
