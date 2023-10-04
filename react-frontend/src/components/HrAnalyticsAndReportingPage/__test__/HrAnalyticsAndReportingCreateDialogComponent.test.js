import React from "react";
import { render, screen } from "@testing-library/react";

import HrAnalyticsAndReportingCreateDialogComponent from "../HrAnalyticsAndReportingCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders hrAnalyticsAndReporting create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HrAnalyticsAndReportingCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("hrAnalyticsAndReporting-create-dialog-component")).toBeInTheDocument();
});
