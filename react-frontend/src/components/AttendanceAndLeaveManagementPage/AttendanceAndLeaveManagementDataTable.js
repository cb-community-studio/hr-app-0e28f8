
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const AttendanceAndLeaveManagementDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.attendance}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.records}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.leave}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.requests}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.leave1}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.balances}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.leave2}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.approvals}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="attendance" header="Attendance" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="records" header="Records " body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="leave" header="Leave" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="requests" header="Requests " body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="leave1" header="Leave 1" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="balances" header="Balances " body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="leave2" header="Leave 2" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="approvals" header="Approvals" body={pTemplate7} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default AttendanceAndLeaveManagementDataTable;