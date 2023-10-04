import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleTimeTrackingPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("timeTracking")
            .get(urlParams.singleTimeTrackingId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "TimeTracking", type: "error", message: error.message || "Failed get timeTracking" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/timeTracking", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">TimeTracking</h3>
                </div>
                <p>timeTracking/{urlParams.singleTimeTrackingId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Time</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.time}</p></div>
                    <label className="text-sm text-primary">In Out </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.inOut}</p></div>
                    <label className="text-sm text-primary">Overtime </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.overtime}</p></div>
                    <label className="text-sm text-primary">Time 1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.time1}</p></div>
                    <label className="text-sm text-primary">Off</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.off}</p></div>
                    <label className="text-sm text-primary">Requests </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.requests}</p></div>
                    <label className="text-sm text-primary">Paid</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.paid}</p></div>
                    <label className="text-sm text-primary">Time 2</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.time2}</p></div>
                    <label className="text-sm text-primary">Off 1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.off1}</p></div>
                    <label className="text-sm text-primary"> Pto </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.Pto}</p></div>
                    <label className="text-sm text-primary">Balance </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.balance}</p></div>
                    <label className="text-sm text-primary">Timesheets </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.timesheets}</p></div>
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

export default connect(mapState, mapDispatch)(SingleTimeTrackingPage);
