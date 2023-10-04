import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleSuccessionPlanningPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("successionPlanning")
            .get(urlParams.singleSuccessionPlanningId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "SuccessionPlanning", type: "error", message: error.message || "Failed get successionPlanning" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/successionPlanning", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">SuccessionPlanning</h3>
                </div>
                <p>successionPlanning/{urlParams.singleSuccessionPlanningId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Potential</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.potential}</p></div>
                    <label className="text-sm text-primary">Successors </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.successors}</p></div>
                    <label className="text-sm text-primary">Leadership</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.leadership}</p></div>
                    <label className="text-sm text-primary">Development</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.development}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleSuccessionPlanningPage);
