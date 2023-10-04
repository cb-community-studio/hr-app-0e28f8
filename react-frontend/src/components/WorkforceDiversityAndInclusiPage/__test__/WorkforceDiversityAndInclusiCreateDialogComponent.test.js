import React from "react";
import { render, screen } from "@testing-library/react";

import WorkforceDiversityAndInclusiCreateDialogComponent from "../WorkforceDiversityAndInclusiCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders workforceDiversityAndInclusi create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <WorkforceDiversityAndInclusiCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("workforceDiversityAndInclusi-create-dialog-component")).toBeInTheDocument();
});
