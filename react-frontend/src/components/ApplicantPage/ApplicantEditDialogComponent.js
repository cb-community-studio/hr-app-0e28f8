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

const ApplicantCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);
    
    const onSave = async () => {
        let _data = {
            first: _entity.first,
            name: _entity.name,
            last: _entity.last,
            name1: _entity.name1,
            contact: _entity.contact,
            information: _entity.information,
            resumeCv: _entity.resumeCv,
            cover: _entity.cover,
            letter: _entity.letter,
            application: _entity.application,
            date: _entity.date,
            application1: _entity.application1,
        };

        setLoading(true);
        try {
            const result = await client.service("applicant").patch(_entity._id, _data);
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
            <div role="applicant-edit-dialog-component">
                <div>
                <p className="m-0">First:</p>
                <InputText className="w-full mb-3" value={_entity?.first} onChange={(e) => setValByKey("first", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Name :</p>
                <InputText className="w-full mb-3" value={_entity?.name} onChange={(e) => setValByKey("name", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Last:</p>
                <InputText className="w-full mb-3" value={_entity?.last} onChange={(e) => setValByKey("last", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Name  1:</p>
                <InputText className="w-full mb-3" value={_entity?.name1} onChange={(e) => setValByKey("name1", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Contact:</p>
                <InputText className="w-full mb-3" value={_entity?.contact} onChange={(e) => setValByKey("contact", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Information :</p>
                <InputText className="w-full mb-3" value={_entity?.information} onChange={(e) => setValByKey("information", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Resume Cv :</p>
                <InputText className="w-full mb-3" value={_entity?.resumeCv} onChange={(e) => setValByKey("resumeCv", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Cover:</p>
                <InputText className="w-full mb-3" value={_entity?.cover} onChange={(e) => setValByKey("cover", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Letter :</p>
                <InputText className="w-full mb-3" value={_entity?.letter} onChange={(e) => setValByKey("letter", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Application:</p>
                <InputText className="w-full mb-3" value={_entity?.application} onChange={(e) => setValByKey("application", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Date :</p>
                <InputText className="w-full mb-3" value={_entity?.date} onChange={(e) => setValByKey("date", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Application 1:</p>
                <InputText className="w-full mb-3" value={_entity?.application1} onChange={(e) => setValByKey("application1", e.target.value)}  />
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

export default connect(null, mapDispatch)(ApplicantCreateDialogComponent);
