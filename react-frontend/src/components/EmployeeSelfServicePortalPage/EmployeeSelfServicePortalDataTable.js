
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const EmployeeSelfServicePortalDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.employee}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.profile}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.updates}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.benefits}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.enrollment}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.payroll}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.information}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.access}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="employee" header="Employee" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="profile" header="Profile" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="updates" header="Updates " body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="benefits" header="Benefits" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="enrollment" header="Enrollment " body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="payroll" header="Payroll" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="information" header="Information" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="access" header="Access" body={pTemplate7} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default EmployeeSelfServicePortalDataTable;