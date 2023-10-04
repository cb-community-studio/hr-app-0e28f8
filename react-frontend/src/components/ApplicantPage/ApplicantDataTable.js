
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const ApplicantDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.first}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.last}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.name1}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.contact}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.information}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.resumeCv}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.cover}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.letter}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.application}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.date}</p>
    const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.application1}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="first" header="First" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="name" header="Name " body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="last" header="Last" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="name1" header="Name  1" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="contact" header="Contact" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="information" header="Information " body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="resumeCv" header="Resume Cv " body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="cover" header="Cover" body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="letter" header="Letter " body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="application" header="Application" body={pTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="date" header="Date " body={pTemplate10} style={{ minWidth: "8rem" }} />
            <Column field="application1" header="Application 1" body={pTemplate11} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ApplicantDataTable;