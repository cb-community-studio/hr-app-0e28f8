import React from "react";
import { render, screen } from "@testing-library/react";

import WorkforceDiversityAndInclusiEditDialogComponent from "../WorkforceDiversityAndInclusiEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders workforceDiversityAndInclusi edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <WorkforceDiversityAndInclusiEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("workforceDiversityAndInclusi-edit-dialog-component")).toBeInTheDocument();
});
