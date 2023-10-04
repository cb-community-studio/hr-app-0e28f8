import React from "react";
import { render, screen } from "@testing-library/react";

import ComplianceAndDocumentsCreateDialogComponent from "../ComplianceAndDocumentsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders complianceAndDocuments create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ComplianceAndDocumentsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("complianceAndDocuments-create-dialog-component")).toBeInTheDocument();
});
