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

const TrainingAndDevelopmentCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);
    
    const onSave = async () => {
        let _data = {
            training: _entity.training,
            courses: _entity.courses,
            training1: _entity.training1,
            attendance: _entity.attendance,
            certification: _entity.certification,
            tracking: _entity.tracking,
            development: _entity.development,
            plans: _entity.plans,
            training2: _entity.training2,
            costs: _entity.costs,
        };

        setLoading(true);
        try {
            const result = await client.service("trainingAndDevelopment").patch(_entity._id, _data);
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
            <div role="trainingAndDevelopment-edit-dialog-component">
                <div>
                <p className="m-0">Training:</p>
                <InputText className="w-full mb-3" value={_entity?.training} onChange={(e) => setValByKey("training", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Courses :</p>
                <InputText className="w-full mb-3" value={_entity?.courses} onChange={(e) => setValByKey("courses", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Training 1:</p>
                <InputText className="w-full mb-3" value={_entity?.training1} onChange={(e) => setValByKey("training1", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Attendance :</p>
                <InputText className="w-full mb-3" value={_entity?.attendance} onChange={(e) => setValByKey("attendance", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Certification:</p>
                <InputText className="w-full mb-3" value={_entity?.certification} onChange={(e) => setValByKey("certification", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Tracking :</p>
                <InputText className="w-full mb-3" value={_entity?.tracking} onChange={(e) => setValByKey("tracking", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Development:</p>
                <InputText className="w-full mb-3" value={_entity?.development} onChange={(e) => setValByKey("development", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Plans :</p>
                <InputText className="w-full mb-3" value={_entity?.plans} onChange={(e) => setValByKey("plans", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Training 2:</p>
                <InputText className="w-full mb-3" value={_entity?.training2} onChange={(e) => setValByKey("training2", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Costs:</p>
                <InputText className="w-full mb-3" value={_entity?.costs} onChange={(e) => setValByKey("costs", e.target.value)}  />
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

export default connect(null, mapDispatch)(TrainingAndDevelopmentCreateDialogComponent);
