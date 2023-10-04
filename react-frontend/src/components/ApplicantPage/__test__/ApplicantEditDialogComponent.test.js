import React from "react";
import { render, screen } from "@testing-library/react";

import ApplicantEditDialogComponent from "../ApplicantEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders applicant edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ApplicantEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("applicant-edit-dialog-component")).toBeInTheDocument();
});
