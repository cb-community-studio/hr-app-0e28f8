import React from "react";
import { render, screen } from "@testing-library/react";

import WorkforceDiversityAndInclusiPage from "../WorkforceDiversityAndInclusiPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders workforceDiversityAndInclusi page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <WorkforceDiversityAndInclusiPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("workforceDiversityAndInclusi-datatable")).toBeInTheDocument();
    expect(screen.getByRole("workforceDiversityAndInclusi-add-button")).toBeInTheDocument();
});
