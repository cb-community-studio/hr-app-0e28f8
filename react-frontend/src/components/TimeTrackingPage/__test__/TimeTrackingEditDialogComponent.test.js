import React from "react";
import { render, screen } from "@testing-library/react";

import TimeTrackingEditDialogComponent from "../TimeTrackingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders timeTracking edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TimeTrackingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("timeTracking-edit-dialog-component")).toBeInTheDocument();
});
