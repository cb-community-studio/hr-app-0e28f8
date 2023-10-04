import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SinglePayrollPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("payroll")
            .get(urlParams.singlePayrollId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Payroll", type: "error", message: error.message || "Failed get payroll" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/payroll", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Payroll</h3>
                </div>
                <p>payroll/{urlParams.singlePayrollId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Salary </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.salary}</p></div>
                    <label className="text-sm text-primary">Tax</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.tax}</p></div>
                    <label className="text-sm text-primary">Information </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.information}</p></div>
                    <label className="text-sm text-primary">Deductions </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.deductions}</p></div>
                    <label className="text-sm text-primary">Direct</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.direct}</p></div>
                    <label className="text-sm text-primary">Deposit</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.deposit}</p></div>
                    <label className="text-sm text-primary">Details </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.details}</p></div>
                    <label className="text-sm text-primary">Pay</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.pay}</p></div>
                    <label className="text-sm text-primary">Stubs </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.stubs}</p></div>
                    <label className="text-sm text-primary">Benefits</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.benefits}</p></div>
                    <label className="text-sm text-primary">Enrollment</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.enrollment}</p></div>
            
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

export default connect(mapState, mapDispatch)(SinglePayrollPage);
