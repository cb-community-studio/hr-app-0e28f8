import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleRecruitmentAndOnboardingPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("recruitmentAndOnboarding")
            .get(urlParams.singleRecruitmentAndOnboardingId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "RecruitmentAndOnboarding", type: "error", message: error.message || "Failed get recruitmentAndOnboarding" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/recruitmentAndOnboarding", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">RecruitmentAndOnboarding</h3>
                </div>
                <p>recruitmentAndOnboarding/{urlParams.singleRecruitmentAndOnboardingId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Job</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.job}</p></div>
                    <label className="text-sm text-primary">Requisitions </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.requisitions}</p></div>
                    <label className="text-sm text-primary">Interview</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.interview}</p></div>
                    <label className="text-sm text-primary">Feedback </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.feedback}</p></div>
                    <label className="text-sm text-primary">Onboarding</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.onboarding}</p></div>
                    <label className="text-sm text-primary">Checklists </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.checklists}</p></div>
                    <label className="text-sm text-primary">Background</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.background}</p></div>
                    <label className="text-sm text-primary">Checks </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.checks}</p></div>
                    <label className="text-sm text-primary">Offer</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.offer}</p></div>
                    <label className="text-sm text-primary">Letters</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.letters}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleRecruitmentAndOnboardingPage);
