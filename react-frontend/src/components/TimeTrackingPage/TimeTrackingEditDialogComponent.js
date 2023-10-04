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

const TimeTrackingCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);
    
    const onSave = async () => {
        let _data = {
            time: _entity.time,
            inOut: _entity.inOut,
            overtime: _entity.overtime,
            time1: _entity.time1,
            off: _entity.off,
            requests: _entity.requests,
            paid: _entity.paid,
            time2: _entity.time2,
            off1: _entity.off1,
            Pto: _entity.Pto,
            balance: _entity.balance,
            timesheets: _entity.timesheets,
            approvals: _entity.approvals,
        };

        setLoading(true);
        try {
            const result = await client.service("timeTracking").patch(_entity._id, _data);
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
            <div role="timeTracking-edit-dialog-component">
                <div>
                <p className="m-0">Time:</p>
                <InputText className="w-full mb-3" value={_entity?.time} onChange={(e) => setValByKey("time", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">In Out :</p>
                <InputText className="w-full mb-3" value={_entity?.inOut} onChange={(e) => setValByKey("inOut", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Overtime :</p>
                <InputText className="w-full mb-3" value={_entity?.overtime} onChange={(e) => setValByKey("overtime", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Time 1:</p>
                <InputText className="w-full mb-3" value={_entity?.time1} onChange={(e) => setValByKey("time1", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Off:</p>
                <InputText className="w-full mb-3" value={_entity?.off} onChange={(e) => setValByKey("off", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Requests :</p>
                <InputText className="w-full mb-3" value={_entity?.requests} onChange={(e) => setValByKey("requests", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Paid:</p>
                <InputText className="w-full mb-3" value={_entity?.paid} onChange={(e) => setValByKey("paid", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Time 2:</p>
                <InputText className="w-full mb-3" value={_entity?.time2} onChange={(e) => setValByKey("time2", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Off 1:</p>
                <InputText className="w-full mb-3" value={_entity?.off1} onChange={(e) => setValByKey("off1", e.target.value)}  />
            </div>
            <div>
                <p className="m-0"> Pto :</p>
                <InputText className="w-full mb-3" value={_entity?.Pto} onChange={(e) => setValByKey("Pto", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Balance :</p>
                <InputText className="w-full mb-3" value={_entity?.balance} onChange={(e) => setValByKey("balance", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Timesheets :</p>
                <InputText className="w-full mb-3" value={_entity?.timesheets} onChange={(e) => setValByKey("timesheets", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Approvals:</p>
                <InputText className="w-full mb-3" value={_entity?.approvals} onChange={(e) => setValByKey("approvals", e.target.value)}  />
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

export default connect(null, mapDispatch)(TimeTrackingCreateDialogComponent);
