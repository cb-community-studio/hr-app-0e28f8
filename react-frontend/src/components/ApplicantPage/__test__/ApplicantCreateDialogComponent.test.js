import React from "react";
import { render, screen } from "@testing-library/react";

import ApplicantCreateDialogComponent from "../ApplicantCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders applicant create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ApplicantCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("applicant-create-dialog-component")).toBeInTheDocument();
});
