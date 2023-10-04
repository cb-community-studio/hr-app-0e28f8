import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleEmployeeSelfServicePortalPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("employeeSelfServicePortal")
            .get(urlParams.singleEmployeeSelfServicePortalId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "EmployeeSelfServicePortal", type: "error", message: error.message || "Failed get employeeSelfServicePortal" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/employeeSelfServicePortal", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">EmployeeSelfServicePortal</h3>
                </div>
                <p>employeeSelfServicePortal/{urlParams.singleEmployeeSelfServicePortalId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Employee</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.employee}</p></div>
                    <label className="text-sm text-primary">Profile</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.profile}</p></div>
                    <label className="text-sm text-primary">Updates </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.updates}</p></div>
                    <label className="text-sm text-primary">Benefits</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.benefits}</p></div>
                    <label className="text-sm text-primary">Enrollment </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.enrollment}</p></div>
                    <label className="text-sm text-primary">Payroll</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.payroll}</p></div>
                    <label className="text-sm text-primary">Information</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.information}</p></div>
                    <label className="text-sm text-primary">Access</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.access}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleEmployeeSelfServicePortalPage);
