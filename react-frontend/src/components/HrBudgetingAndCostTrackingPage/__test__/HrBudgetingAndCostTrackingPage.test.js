import React from "react";
import { render, screen } from "@testing-library/react";

import HrBudgetingAndCostTrackingPage from "../HrBudgetingAndCostTrackingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders hrBudgetingAndCostTracking page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HrBudgetingAndCostTrackingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("hrBudgetingAndCostTracking-datatable")).toBeInTheDocument();
    expect(screen.getByRole("hrBudgetingAndCostTracking-add-button")).toBeInTheDocument();
});
