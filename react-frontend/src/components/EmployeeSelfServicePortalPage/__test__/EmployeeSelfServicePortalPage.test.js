import React from "react";
import { render, screen } from "@testing-library/react";

import EmployeeSelfServicePortalPage from "../EmployeeSelfServicePortalPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders employeeSelfServicePortal page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmployeeSelfServicePortalPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("employeeSelfServicePortal-datatable")).toBeInTheDocument();
    expect(screen.getByRole("employeeSelfServicePortal-add-button")).toBeInTheDocument();
});
