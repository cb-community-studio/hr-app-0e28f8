import React from "react";
import { render, screen } from "@testing-library/react";

import TimeTrackingPage from "../TimeTrackingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders timeTracking page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TimeTrackingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("timeTracking-datatable")).toBeInTheDocument();
    expect(screen.getByRole("timeTracking-add-button")).toBeInTheDocument();
});
