
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const EmployeeSurveysAndFeedbackDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.employee}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.surveys}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.feedback}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.forms}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.survey}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.results}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="employee" header="Employee" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="surveys" header="Surveys " body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="feedback" header="Feedback" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="forms" header="Forms " body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="survey" header="Survey" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="results" header="Results" body={pTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default EmployeeSurveysAndFeedbackDataTable;