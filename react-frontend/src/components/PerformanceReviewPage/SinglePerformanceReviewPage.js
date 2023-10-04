import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SinglePerformanceReviewPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("performanceReview")
            .get(urlParams.singlePerformanceReviewId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "PerformanceReview", type: "error", message: error.message || "Failed get performanceReview" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/performanceReview", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">PerformanceReview</h3>
                </div>
                <p>performanceReview/{urlParams.singlePerformanceReviewId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Employee</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.employee}</p></div>
                    <label className="text-sm text-primary">Being</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.being}</p></div>
                    <label className="text-sm text-primary">Reviewed </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.reviewed}</p></div>
                    <label className="text-sm text-primary">Reviewer </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.reviewer}</p></div>
                    <label className="text-sm text-primary">Review</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.review}</p></div>
                    <label className="text-sm text-primary">Date </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.date}</p></div>
                    <label className="text-sm text-primary">Performance</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.performance}</p></div>
                    <label className="text-sm text-primary">Goals </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.goals}</p></div>
                    <label className="text-sm text-primary">Ratings Feedback </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.ratingsFeedback}</p></div>
                    <label className="text-sm text-primary">Development</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.development}</p></div>
                    <label className="text-sm text-primary">Plan</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.plan}</p></div>
            
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

export default connect(mapState, mapDispatch)(SinglePerformanceReviewPage);
