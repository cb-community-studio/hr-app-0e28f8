
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const BenefitsOpenEnrollmentDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.open}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.enrollment}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.periods}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.benefit}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.plan}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.selections}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="open" header="Open" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="enrollment" header="Enrollment" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="periods" header="Periods " body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="benefit" header="Benefit" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="plan" header="Plan" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="selections" header="Selections" body={pTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default BenefitsOpenEnrollmentDataTable;