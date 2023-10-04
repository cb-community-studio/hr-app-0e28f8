import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleJobPostingPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("jobPosting")
            .get(urlParams.singleJobPostingId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "JobPosting", type: "error", message: error.message || "Failed get jobPosting" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/jobPosting", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">JobPosting</h3>
                </div>
                <p>jobPosting/{urlParams.singleJobPostingId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Job</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.job}</p></div>
                    <label className="text-sm text-primary">Title </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.title}</p></div>
                    <label className="text-sm text-primary">Job 1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.job1}</p></div>
                    <label className="text-sm text-primary">Description </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.description}</p></div>
                    <label className="text-sm text-primary">Department </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.department}</p></div>
                    <label className="text-sm text-primary">Location </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.location}</p></div>
                    <label className="text-sm text-primary">Salary</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.salary}</p></div>
                    <label className="text-sm text-primary">Range </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.range}</p></div>
                    <label className="text-sm text-primary">Required</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.requiredfield}</p></div>
                    <label className="text-sm text-primary">Qualifications </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.qualifications}</p></div>
                    <label className="text-sm text-primary">Application</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.application}</p></div>
                    <label className="text-sm text-primary">Deadline</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.deadline}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleJobPostingPage);
