
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const TimeTrackingDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.time}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.inOut}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.overtime}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.time1}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.off}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.requests}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.paid}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.time2}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.off1}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.Pto}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.balance}</p>
    const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.timesheets}</p>
    const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.approvals}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="time" header="Time" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="inOut" header="In Out " body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="overtime" header="Overtime " body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="time1" header="Time 1" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="off" header="Off" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="requests" header="Requests " body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="paid" header="Paid" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="time2" header="Time 2" body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="off1" header="Off 1" body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="Pto" header=" Pto " body={pTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="balance" header="Balance " body={pTemplate10} style={{ minWidth: "8rem" }} />
            <Column field="timesheets" header="Timesheets " body={pTemplate11} style={{ minWidth: "8rem" }} />
            <Column field="approvals" header="Approvals" body={pTemplate12} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default TimeTrackingDataTable;