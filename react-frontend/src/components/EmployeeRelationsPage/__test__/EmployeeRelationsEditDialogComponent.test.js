import React from "react";
import { render, screen } from "@testing-library/react";

import EmployeeRelationsEditDialogComponent from "../EmployeeRelationsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders employeeRelations edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmployeeRelationsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("employeeRelations-edit-dialog-component")).toBeInTheDocument();
});
