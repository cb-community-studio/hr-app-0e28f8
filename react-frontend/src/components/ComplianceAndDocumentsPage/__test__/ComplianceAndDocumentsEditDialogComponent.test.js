import React from "react";
import { render, screen } from "@testing-library/react";

import ComplianceAndDocumentsEditDialogComponent from "../ComplianceAndDocumentsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders complianceAndDocuments edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ComplianceAndDocumentsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("complianceAndDocuments-edit-dialog-component")).toBeInTheDocument();
});
