
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const HrAnalyticsAndReportingDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.various}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.hrff}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.metrics}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.custom}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.reports}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.data}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.visualization}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="various" header="Various" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="hrff" header="Hr" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="metrics" header="Metrics " body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="custom" header="Custom" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="reports" header="Reports " body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="data" header="Data" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="visualization" header="Visualization" body={pTemplate6} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default HrAnalyticsAndReportingDataTable;