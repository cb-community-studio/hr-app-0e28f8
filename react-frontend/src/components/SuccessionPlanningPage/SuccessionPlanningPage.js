// REACT 18 TEMPLATE - <Service>Page.js

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import AreYouSureDialog from "../common/AreYouSureDialog";
import SuccessionPlanningDatatable from "./SuccessionPlanningDataTable";
import SuccessionPlanningEditDialogComponent from "./SuccessionPlanningEditDialogComponent";
import SuccessionPlanningCreateDialogComponent from "./SuccessionPlanningCreateDialogComponent";
import SuccessionPlanningFakerDialogComponent from "./SuccessionPlanningFakerDialogComponent";
import SuccessionPlanningSeederDialogComponent from "./SuccessionPlanningSeederDialogComponent";

const SuccessionPlanningPage = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [showAreYouSureDialog, setShowAreYouSureDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showCreateDialog, setShowCreateDialog] = useState(false);
    const [showFakerDialog, setShowFakerDialog] = useState(false);
    const [showSeederDialog, setShowSeederDialog] = useState(false);
    const [selectedEntityIndex, setSelectedEntityIndex] = useState();
    useEffect(() => {
        //on mount
        client
            .service("successionPlanning")
            .find({ query: { $limit: 100  } })
            .then((res) => {
                let results = res.data;
                  
                setData(results);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "SuccessionPlanning", type: "error", message: error.message || "Failed get successionPlanning" });
            });
    }, []);



    const onEditRow = (rowData, rowIndex) => {
        setSelectedEntityIndex(rowIndex);
        setShowEditDialog(true);
    };

    const onCreateResult = (newEntity) => {
        setData([...data, newEntity]);
    };
    const onFakerCreateResults = (newEntities) => {
        setSelectedEntityIndex();
        setData([...data, ...newEntities]);
    };
    const onSeederResults = (newEntities) => {
        setSelectedEntityIndex();
        setData([...data, ...newEntities]);
    };

    const onEditResult = (newEntity) => {
        let _newData = _.cloneDeep(data);
        _newData[selectedEntityIndex] = newEntity;
        setData(_newData);
    };

    const deleteRow = async () => {
        try {
            await client.service("successionPlanning").remove(data[selectedEntityIndex]?._id);
            let _newData = data.filter((_, i) => i !== selectedEntityIndex);
            setData(_newData);
            setSelectedEntityIndex();
            setShowAreYouSureDialog(false)
        } catch (error) {
            console.log({ error });
            props.alert({ title: "SuccessionPlanning", type: "error", message: error.message || "Failed delete record" });
        }
    };
    const onRowDelete = (index) => {
        setSelectedEntityIndex(index);
        setShowAreYouSureDialog(true);
    };

    const onRowClick = ({data}) => {
        navigate(`/successionPlanning/${data._id}`)
    };

    const menuItems = [
        {
            label: "Faker",
            icon: "pi pi-sliders-h",
            command: (e) => {
                setShowFakerDialog(true);
            },
        },
        {
            label: "Seeder",
            icon: "pi pi-forward",
            command: (e) => {
                setShowSeederDialog(true);
            },
        },
    ];

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <h3 className="mb-0 ml-2">SuccessionPlanning</h3>
                <div className="col flex justify-content-end">
                    <Button label="add" icon="pi pi-plus" onClick={() => setShowCreateDialog(true)} role="successionPlanning-add-button"/>
                    <SplitButton model={menuItems} dropdownIcon="pi pi-ellipsis-v" buttonClassName="hidden" menuButtonClassName="ml-1 p-button-text"></SplitButton>
                </div>
            </div>
            <div className="grid col-10">
                <div className="col-12" role="successionPlanning-datatable">
                    <SuccessionPlanningDatatable items={data} onRowDelete={onRowDelete} onEditRow={onEditRow} onRowClick={onRowClick} />
                 </div>
            </div>
            <AreYouSureDialog header="Delete" body="Are you sure you want to delete this record?" show={showAreYouSureDialog} onHide={() => setShowAreYouSureDialog(false)} onYes={() => deleteRow()} />
            <SuccessionPlanningEditDialogComponent entity={data[selectedEntityIndex]} show={showEditDialog} onHide={() => setShowEditDialog(false)} onEditResult={onEditResult} />
            <SuccessionPlanningCreateDialogComponent show={showCreateDialog} onHide={() => setShowCreateDialog(false)} onCreateResult={onCreateResult} />
            <SuccessionPlanningFakerDialogComponent show={showFakerDialog} onHide={() => setShowFakerDialog(false)} onFakerCreateResults={onFakerCreateResults} />
            <SuccessionPlanningSeederDialogComponent show={showSeederDialog} onHide={() => setShowSeederDialog(false)} onSeederResults={onSeederResults} />
        </div>
    );
};
const mapState = (state) => ({
    //
});
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SuccessionPlanningPage);
