import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';



const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const PerformanceReviewCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);
    
    const onSave = async () => {
        let _data = {
            employee: _entity.employee,
            being: _entity.being,
            reviewed: _entity.reviewed,
            reviewer: _entity.reviewer,
            review: _entity.review,
            date: _entity.date,
            performance: _entity.performance,
            goals: _entity.goals,
            ratingsFeedback: _entity.ratingsFeedback,
            development: _entity.development,
            plan: _entity.plan,
        };

        setLoading(true);
        try {
            const result = await client.service("performanceReview").patch(_entity._id, _data);
            props.onHide();
            props.alert({ type: "success", title: "Edit info", message: "Info updated successfully" });
            props.onEditResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    // children dropdown options
    

    return (
        <Dialog header="Edit Info" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="performanceReview-edit-dialog-component">
                <div>
                <p className="m-0">Employee:</p>
                <InputText className="w-full mb-3" value={_entity?.employee} onChange={(e) => setValByKey("employee", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Being:</p>
                <InputText className="w-full mb-3" value={_entity?.being} onChange={(e) => setValByKey("being", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Reviewed :</p>
                <InputText className="w-full mb-3" value={_entity?.reviewed} onChange={(e) => setValByKey("reviewed", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Reviewer :</p>
                <InputText className="w-full mb-3" value={_entity?.reviewer} onChange={(e) => setValByKey("reviewer", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Review:</p>
                <InputText className="w-full mb-3" value={_entity?.review} onChange={(e) => setValByKey("review", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Date :</p>
                <InputText className="w-full mb-3" value={_entity?.date} onChange={(e) => setValByKey("date", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Performance:</p>
                <InputText className="w-full mb-3" value={_entity?.performance} onChange={(e) => setValByKey("performance", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Goals :</p>
                <InputText className="w-full mb-3" value={_entity?.goals} onChange={(e) => setValByKey("goals", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Ratings Feedback :</p>
                <InputText className="w-full mb-3" value={_entity?.ratingsFeedback} onChange={(e) => setValByKey("ratingsFeedback", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Development:</p>
                <InputText className="w-full mb-3" value={_entity?.development} onChange={(e) => setValByKey("development", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Plan:</p>
                <InputText className="w-full mb-3" value={_entity?.plan} onChange={(e) => setValByKey("plan", e.target.value)}  />
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return{}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(PerformanceReviewCreateDialogComponent);
