import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleBenefitsAdministrationPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("benefitsAdministration")
            .get(urlParams.singleBenefitsAdministrationId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "BenefitsAdministration", type: "error", message: error.message || "Failed get benefitsAdministration" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/benefitsAdministration", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">BenefitsAdministration</h3>
                </div>
                <p>benefitsAdministration/{urlParams.singleBenefitsAdministrationId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Health</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.health}</p></div>
                    <label className="text-sm text-primary">Insurance </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.insurance}</p></div>
                    <label className="text-sm text-primary">Retirement</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.retirement}</p></div>
                    <label className="text-sm text-primary">Plans </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.plans}</p></div>
                    <label className="text-sm text-primary">Dental</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.dental}</p></div>
                    <label className="text-sm text-primary">And</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.and}</p></div>
                    <label className="text-sm text-primary">Vision</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.vision}</p></div>
                    <label className="text-sm text-primary">Plans  1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.plans1}</p></div>
                    <label className="text-sm text-primary">Flexible</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.flexible}</p></div>
                    <label className="text-sm text-primary">Spending</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.spending}</p></div>
                    <label className="text-sm text-primary">Accounts</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.accounts}</p></div>
                    <label className="text-sm text-primary"> Fsas  </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.Fsas}</p></div>
                    <label className="text-sm text-primary">Life</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.life}</p></div>
                    <label className="text-sm text-primary">Insurance  1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.insurance1}</p></div>
                    <label className="text-sm text-primary">Disability</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.disability}</p></div>
                    <label className="text-sm text-primary">Insurance  2</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.insurance2}</p></div>
                    <label className="text-sm text-primary">Benefits</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.benefits}</p></div>
                    <label className="text-sm text-primary">Enrollment Changes</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.enrollmentChanges}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleBenefitsAdministrationPage);
