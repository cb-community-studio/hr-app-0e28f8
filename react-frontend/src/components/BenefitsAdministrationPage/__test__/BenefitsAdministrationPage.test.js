import React from "react";
import { render, screen } from "@testing-library/react";

import BenefitsAdministrationPage from "../BenefitsAdministrationPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders benefitsAdministration page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BenefitsAdministrationPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("benefitsAdministration-datatable")).toBeInTheDocument();
    expect(screen.getByRole("benefitsAdministration-add-button")).toBeInTheDocument();
});
