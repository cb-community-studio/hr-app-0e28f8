import React from "react";
import { render, screen } from "@testing-library/react";

import BenefitsAdministrationEditDialogComponent from "../BenefitsAdministrationEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders benefitsAdministration edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BenefitsAdministrationEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("benefitsAdministration-edit-dialog-component")).toBeInTheDocument();
});
