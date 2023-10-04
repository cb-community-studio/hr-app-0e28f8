
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const JobPostingDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.job}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.title}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.job1}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.department}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.location}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.salary}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.range}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.requiredfield}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.qualifications}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.application}</p>
    const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.deadline}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="job" header="Job" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="title" header="Title " body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="job1" header="Job 1" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="description" header="Description " body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="department" header="Department " body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="location" header="Location " body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="salary" header="Salary" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="range" header="Range " body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="requiredfield" header="Required" body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="qualifications" header="Qualifications " body={pTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="application" header="Application" body={pTemplate10} style={{ minWidth: "8rem" }} />
            <Column field="deadline" header="Deadline" body={pTemplate11} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default JobPostingDataTable;