import React from "react";
import { render, screen } from "@testing-library/react";

import BenefitsOpenEnrollmentEditDialogComponent from "../BenefitsOpenEnrollmentEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders benefitsOpenEnrollment edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BenefitsOpenEnrollmentEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("benefitsOpenEnrollment-edit-dialog-component")).toBeInTheDocument();
});
