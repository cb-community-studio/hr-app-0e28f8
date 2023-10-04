
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const PerformanceReviewDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.employee}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.being}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.reviewed}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.reviewer}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.review}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.date}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.performance}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.goals}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.ratingsFeedback}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.development}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.plan}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="employee" header="Employee" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="being" header="Being" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="reviewed" header="Reviewed " body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="reviewer" header="Reviewer " body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="review" header="Review" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="date" header="Date " body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="performance" header="Performance" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="goals" header="Goals " body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="ratingsFeedback" header="Ratings Feedback " body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="development" header="Development" body={pTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="plan" header="Plan" body={pTemplate10} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default PerformanceReviewDataTable;