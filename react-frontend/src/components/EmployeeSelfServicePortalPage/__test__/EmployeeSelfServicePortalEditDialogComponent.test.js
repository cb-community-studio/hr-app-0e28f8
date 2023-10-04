import React from "react";
import { render, screen } from "@testing-library/react";

import EmployeeSelfServicePortalEditDialogComponent from "../EmployeeSelfServicePortalEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders employeeSelfServicePortal edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmployeeSelfServicePortalEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("employeeSelfServicePortal-edit-dialog-component")).toBeInTheDocument();
});
