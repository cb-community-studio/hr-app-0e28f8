import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleHrAnalyticsAndReportingPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("hrAnalyticsAndReporting")
            .get(urlParams.singleHrAnalyticsAndReportingId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "HrAnalyticsAndReporting", type: "error", message: error.message || "Failed get hrAnalyticsAndReporting" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/hrAnalyticsAndReporting", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">HrAnalyticsAndReporting</h3>
                </div>
                <p>hrAnalyticsAndReporting/{urlParams.singleHrAnalyticsAndReportingId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Various</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.various}</p></div>
                    <label className="text-sm text-primary">Hr</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.hrff}</p></div>
                    <label className="text-sm text-primary">Metrics </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.metrics}</p></div>
                    <label className="text-sm text-primary">Custom</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.custom}</p></div>
                    <label className="text-sm text-primary">Reports </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.reports}</p></div>
                    <label className="text-sm text-primary">Data</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.data}</p></div>
                    <label className="text-sm text-primary">Visualization</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.visualization}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleHrAnalyticsAndReportingPage);
