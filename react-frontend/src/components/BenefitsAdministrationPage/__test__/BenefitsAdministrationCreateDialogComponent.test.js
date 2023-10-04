import React from "react";
import { render, screen } from "@testing-library/react";

import BenefitsAdministrationCreateDialogComponent from "../BenefitsAdministrationCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders benefitsAdministration create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BenefitsAdministrationCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("benefitsAdministration-create-dialog-component")).toBeInTheDocument();
});
