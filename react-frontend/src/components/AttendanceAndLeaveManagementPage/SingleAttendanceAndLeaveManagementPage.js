import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleAttendanceAndLeaveManagementPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("attendanceAndLeaveManagement")
            .get(urlParams.singleAttendanceAndLeaveManagementId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "AttendanceAndLeaveManagement", type: "error", message: error.message || "Failed get attendanceAndLeaveManagement" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/attendanceAndLeaveManagement", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">AttendanceAndLeaveManagement</h3>
                </div>
                <p>attendanceAndLeaveManagement/{urlParams.singleAttendanceAndLeaveManagementId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Attendance</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.attendance}</p></div>
                    <label className="text-sm text-primary">Records </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.records}</p></div>
                    <label className="text-sm text-primary">Leave</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.leave}</p></div>
                    <label className="text-sm text-primary">Requests </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.requests}</p></div>
                    <label className="text-sm text-primary">Leave 1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.leave1}</p></div>
                    <label className="text-sm text-primary">Balances </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.balances}</p></div>
                    <label className="text-sm text-primary">Leave 2</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.leave2}</p></div>
                    <label className="text-sm text-primary">Approvals</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.approvals}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleAttendanceAndLeaveManagementPage);
