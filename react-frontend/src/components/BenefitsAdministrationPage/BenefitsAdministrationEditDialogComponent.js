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

const BenefitsAdministrationCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);
    
    const onSave = async () => {
        let _data = {
            health: _entity.health,
            insurance: _entity.insurance,
            retirement: _entity.retirement,
            plans: _entity.plans,
            dental: _entity.dental,
            and: _entity.and,
            vision: _entity.vision,
            plans1: _entity.plans1,
            flexible: _entity.flexible,
            spending: _entity.spending,
            accounts: _entity.accounts,
            Fsas: _entity.Fsas,
            life: _entity.life,
            insurance1: _entity.insurance1,
            disability: _entity.disability,
            insurance2: _entity.insurance2,
            benefits: _entity.benefits,
            enrollmentChanges: _entity.enrollmentChanges,
        };

        setLoading(true);
        try {
            const result = await client.service("benefitsAdministration").patch(_entity._id, _data);
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
            <div role="benefitsAdministration-edit-dialog-component">
                <div>
                <p className="m-0">Health:</p>
                <InputText className="w-full mb-3" value={_entity?.health} onChange={(e) => setValByKey("health", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Insurance :</p>
                <InputText className="w-full mb-3" value={_entity?.insurance} onChange={(e) => setValByKey("insurance", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Retirement:</p>
                <InputText className="w-full mb-3" value={_entity?.retirement} onChange={(e) => setValByKey("retirement", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Plans :</p>
                <InputText className="w-full mb-3" value={_entity?.plans} onChange={(e) => setValByKey("plans", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Dental:</p>
                <InputText className="w-full mb-3" value={_entity?.dental} onChange={(e) => setValByKey("dental", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">And:</p>
                <InputText className="w-full mb-3" value={_entity?.and} onChange={(e) => setValByKey("and", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Vision:</p>
                <InputText className="w-full mb-3" value={_entity?.vision} onChange={(e) => setValByKey("vision", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Plans  1:</p>
                <InputText className="w-full mb-3" value={_entity?.plans1} onChange={(e) => setValByKey("plans1", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Flexible:</p>
                <InputText className="w-full mb-3" value={_entity?.flexible} onChange={(e) => setValByKey("flexible", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Spending:</p>
                <InputText className="w-full mb-3" value={_entity?.spending} onChange={(e) => setValByKey("spending", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Accounts:</p>
                <InputText className="w-full mb-3" value={_entity?.accounts} onChange={(e) => setValByKey("accounts", e.target.value)}  />
            </div>
            <div>
                <p className="m-0"> Fsas  :</p>
                <InputText className="w-full mb-3" value={_entity?.Fsas} onChange={(e) => setValByKey("Fsas", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Life:</p>
                <InputText className="w-full mb-3" value={_entity?.life} onChange={(e) => setValByKey("life", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Insurance  1:</p>
                <InputText className="w-full mb-3" value={_entity?.insurance1} onChange={(e) => setValByKey("insurance1", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Disability:</p>
                <InputText className="w-full mb-3" value={_entity?.disability} onChange={(e) => setValByKey("disability", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Insurance  2:</p>
                <InputText className="w-full mb-3" value={_entity?.insurance2} onChange={(e) => setValByKey("insurance2", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Benefits:</p>
                <InputText className="w-full mb-3" value={_entity?.benefits} onChange={(e) => setValByKey("benefits", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Enrollment Changes:</p>
                <InputText className="w-full mb-3" value={_entity?.enrollmentChanges} onChange={(e) => setValByKey("enrollmentChanges", e.target.value)}  />
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

export default connect(null, mapDispatch)(BenefitsAdministrationCreateDialogComponent);
