import React from "react";
import { render, screen } from "@testing-library/react";

import ComplianceAndDocumentsPage from "../ComplianceAndDocumentsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders complianceAndDocuments page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ComplianceAndDocumentsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("complianceAndDocuments-datatable")).toBeInTheDocument();
    expect(screen.getByRole("complianceAndDocuments-add-button")).toBeInTheDocument();
});
