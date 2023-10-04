
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const BenefitsAdministrationDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.health}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.insurance}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.retirement}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.plans}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.dental}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.and}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.vision}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.plans1}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.flexible}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.spending}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.accounts}</p>
    const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.Fsas}</p>
    const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.life}</p>
    const pTemplate13 = (rowData, { rowIndex }) => <p >{rowData.insurance1}</p>
    const pTemplate14 = (rowData, { rowIndex }) => <p >{rowData.disability}</p>
    const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.insurance2}</p>
    const pTemplate16 = (rowData, { rowIndex }) => <p >{rowData.benefits}</p>
    const pTemplate17 = (rowData, { rowIndex }) => <p >{rowData.enrollmentChanges}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="health" header="Health" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="insurance" header="Insurance " body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="retirement" header="Retirement" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="plans" header="Plans " body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="dental" header="Dental" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="and" header="And" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="vision" header="Vision" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="plans1" header="Plans  1" body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="flexible" header="Flexible" body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="spending" header="Spending" body={pTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="accounts" header="Accounts" body={pTemplate10} style={{ minWidth: "8rem" }} />
            <Column field="Fsas" header=" Fsas  " body={pTemplate11} style={{ minWidth: "8rem" }} />
            <Column field="life" header="Life" body={pTemplate12} style={{ minWidth: "8rem" }} />
            <Column field="insurance1" header="Insurance  1" body={pTemplate13} style={{ minWidth: "8rem" }} />
            <Column field="disability" header="Disability" body={pTemplate14} style={{ minWidth: "8rem" }} />
            <Column field="insurance2" header="Insurance  2" body={pTemplate15} style={{ minWidth: "8rem" }} />
            <Column field="benefits" header="Benefits" body={pTemplate16} style={{ minWidth: "8rem" }} />
            <Column field="enrollmentChanges" header="Enrollment Changes" body={pTemplate17} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default BenefitsAdministrationDataTable;