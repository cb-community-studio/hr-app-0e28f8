import React from "react";
import { render, screen } from "@testing-library/react";

import SuccessionPlanningEditDialogComponent from "../SuccessionPlanningEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders successionPlanning edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SuccessionPlanningEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("successionPlanning-edit-dialog-component")).toBeInTheDocument();
});
