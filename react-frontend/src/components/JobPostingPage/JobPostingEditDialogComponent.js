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

const JobPostingCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);
    
    const onSave = async () => {
        let _data = {
            job: _entity.job,
            title: _entity.title,
            job1: _entity.job1,
            description: _entity.description,
            department: _entity.department,
            location: _entity.location,
            salary: _entity.salary,
            range: _entity.range,
            requiredfield: _entity.requiredfield,
            qualifications: _entity.qualifications,
            application: _entity.application,
            deadline: _entity.deadline,
        };

        setLoading(true);
        try {
            const result = await client.service("jobPosting").patch(_entity._id, _data);
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
            <div role="jobPosting-edit-dialog-component">
                <div>
                <p className="m-0">Job:</p>
                <InputText className="w-full mb-3" value={_entity?.job} onChange={(e) => setValByKey("job", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Title :</p>
                <InputText className="w-full mb-3" value={_entity?.title} onChange={(e) => setValByKey("title", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Job 1:</p>
                <InputText className="w-full mb-3" value={_entity?.job1} onChange={(e) => setValByKey("job1", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Description :</p>
                <InputText className="w-full mb-3" value={_entity?.description} onChange={(e) => setValByKey("description", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Department :</p>
                <InputText className="w-full mb-3" value={_entity?.department} onChange={(e) => setValByKey("department", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Location :</p>
                <InputText className="w-full mb-3" value={_entity?.location} onChange={(e) => setValByKey("location", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Salary:</p>
                <InputText className="w-full mb-3" value={_entity?.salary} onChange={(e) => setValByKey("salary", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Range :</p>
                <InputText className="w-full mb-3" value={_entity?.range} onChange={(e) => setValByKey("range", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Required:</p>
                <InputText className="w-full mb-3" value={_entity?.requiredfield} onChange={(e) => setValByKey("requiredfield", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Qualifications :</p>
                <InputText className="w-full mb-3" value={_entity?.qualifications} onChange={(e) => setValByKey("qualifications", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Application:</p>
                <InputText className="w-full mb-3" value={_entity?.application} onChange={(e) => setValByKey("application", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Deadline:</p>
                <InputText className="w-full mb-3" value={_entity?.deadline} onChange={(e) => setValByKey("deadline", e.target.value)}  />
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

export default connect(null, mapDispatch)(JobPostingCreateDialogComponent);
