import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleComplianceAndDocumentsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("complianceAndDocuments")
            .get(urlParams.singleComplianceAndDocumentsId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "ComplianceAndDocuments", type: "error", message: error.message || "Failed get complianceAndDocuments" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/complianceAndDocuments", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">ComplianceAndDocuments</h3>
                </div>
                <p>complianceAndDocuments/{urlParams.singleComplianceAndDocumentsId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Employee</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.employee}</p></div>
                    <label className="text-sm text-primary">Contracts </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.contracts}</p></div>
                    <label className="text-sm text-primary">Hr</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.hrff}</p></div>
                    <label className="text-sm text-primary">Policies</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.policies}</p></div>
                    <label className="text-sm text-primary">And</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.and}</p></div>
                    <label className="text-sm text-primary">Procedures </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.procedures}</p></div>
                    <label className="text-sm text-primary">Compliance</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.compliance}</p></div>
                    <label className="text-sm text-primary">Documentation </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.documentation}</p></div>
                    <label className="text-sm text-primary">Employee 1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.employee1}</p></div>
                    <label className="text-sm text-primary">Handbooks</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.handbooks}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleComplianceAndDocumentsPage);
