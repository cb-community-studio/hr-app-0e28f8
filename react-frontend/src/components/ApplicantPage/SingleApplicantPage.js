import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleApplicantPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("applicant")
            .get(urlParams.singleApplicantId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Applicant", type: "error", message: error.message || "Failed get applicant" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/applicant", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Applicant</h3>
                </div>
                <p>applicant/{urlParams.singleApplicantId}</p>
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
                    <label className="text-sm text-primary">Contact</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.contact}</p></div>
                    <label className="text-sm text-primary">Information </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.information}</p></div>
                    <label className="text-sm text-primary">Resume Cv </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.resumeCv}</p></div>
                    <label className="text-sm text-primary">Cover</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.cover}</p></div>
                    <label className="text-sm text-primary">Letter </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.letter}</p></div>
                    <label className="text-sm text-primary">Application</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.application}</p></div>
                    <label className="text-sm text-primary">Date </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.date}</p></div>
                    <label className="text-sm text-primary">Application 1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.application1}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleApplicantPage);
