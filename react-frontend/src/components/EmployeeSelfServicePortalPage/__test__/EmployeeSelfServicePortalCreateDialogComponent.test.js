import React from "react";
import { render, screen } from "@testing-library/react";

import EmployeeSelfServicePortalCreateDialogComponent from "../EmployeeSelfServicePortalCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders employeeSelfServicePortal create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmployeeSelfServicePortalCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("employeeSelfServicePortal-create-dialog-component")).toBeInTheDocument();
});
