import React from "react";
import { render, screen } from "@testing-library/react";

import BenefitsOpenEnrollmentCreateDialogComponent from "../BenefitsOpenEnrollmentCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders benefitsOpenEnrollment create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BenefitsOpenEnrollmentCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("benefitsOpenEnrollment-create-dialog-component")).toBeInTheDocument();
});
