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

const RecruitmentAndOnboardingCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);
    
    const onSave = async () => {
        let _data = {
            job: _entity.job,
            requisitions: _entity.requisitions,
            interview: _entity.interview,
            feedback: _entity.feedback,
            onboarding: _entity.onboarding,
            checklists: _entity.checklists,
            background: _entity.background,
            checks: _entity.checks,
            offer: _entity.offer,
            letters: _entity.letters,
        };

        setLoading(true);
        try {
            const result = await client.service("recruitmentAndOnboarding").patch(_entity._id, _data);
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
            <div role="recruitmentAndOnboarding-edit-dialog-component">
                <div>
                <p className="m-0">Job:</p>
                <InputText className="w-full mb-3" value={_entity?.job} onChange={(e) => setValByKey("job", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Requisitions :</p>
                <InputText className="w-full mb-3" value={_entity?.requisitions} onChange={(e) => setValByKey("requisitions", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Interview:</p>
                <InputText className="w-full mb-3" value={_entity?.interview} onChange={(e) => setValByKey("interview", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Feedback :</p>
                <InputText className="w-full mb-3" value={_entity?.feedback} onChange={(e) => setValByKey("feedback", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Onboarding:</p>
                <InputText className="w-full mb-3" value={_entity?.onboarding} onChange={(e) => setValByKey("onboarding", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Checklists :</p>
                <InputText className="w-full mb-3" value={_entity?.checklists} onChange={(e) => setValByKey("checklists", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Background:</p>
                <InputText className="w-full mb-3" value={_entity?.background} onChange={(e) => setValByKey("background", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Checks :</p>
                <InputText className="w-full mb-3" value={_entity?.checks} onChange={(e) => setValByKey("checks", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Offer:</p>
                <InputText className="w-full mb-3" value={_entity?.offer} onChange={(e) => setValByKey("offer", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Letters:</p>
                <InputText className="w-full mb-3" value={_entity?.letters} onChange={(e) => setValByKey("letters", e.target.value)}  />
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

export default connect(null, mapDispatch)(RecruitmentAndOnboardingCreateDialogComponent);
