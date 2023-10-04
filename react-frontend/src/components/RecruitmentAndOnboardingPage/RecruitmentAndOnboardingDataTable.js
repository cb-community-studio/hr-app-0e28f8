
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const RecruitmentAndOnboardingDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.job}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.requisitions}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.interview}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.feedback}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.onboarding}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.checklists}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.background}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.checks}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.offer}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.letters}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="job" header="Job" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="requisitions" header="Requisitions " body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="interview" header="Interview" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="feedback" header="Feedback " body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="onboarding" header="Onboarding" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="checklists" header="Checklists " body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="background" header="Background" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="checks" header="Checks " body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="offer" header="Offer" body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="letters" header="Letters" body={pTemplate9} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default RecruitmentAndOnboardingDataTable;