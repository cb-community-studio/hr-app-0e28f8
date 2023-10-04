
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const PayrollDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.salary}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.tax}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.information}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.deductions}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.direct}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.deposit}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.details}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.pay}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.stubs}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.benefits}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.enrollment}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="salary" header="Salary " body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="tax" header="Tax" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="information" header="Information " body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="deductions" header="Deductions " body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="direct" header="Direct" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="deposit" header="Deposit" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="details" header="Details " body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="pay" header="Pay" body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="stubs" header="Stubs " body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="benefits" header="Benefits" body={pTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="enrollment" header="Enrollment" body={pTemplate10} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default PayrollDataTable;