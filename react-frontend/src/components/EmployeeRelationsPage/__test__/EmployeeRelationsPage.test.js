import React from "react";
import { render, screen } from "@testing-library/react";

import EmployeeRelationsPage from "../EmployeeRelationsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders employeeRelations page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmployeeRelationsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("employeeRelations-datatable")).toBeInTheDocument();
    expect(screen.getByRole("employeeRelations-add-button")).toBeInTheDocument();
});
