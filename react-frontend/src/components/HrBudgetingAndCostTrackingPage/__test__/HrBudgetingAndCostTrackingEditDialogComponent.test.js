import React from "react";
import { render, screen } from "@testing-library/react";

import HrBudgetingAndCostTrackingEditDialogComponent from "../HrBudgetingAndCostTrackingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders hrBudgetingAndCostTracking edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HrBudgetingAndCostTrackingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("hrBudgetingAndCostTracking-edit-dialog-component")).toBeInTheDocument();
});
