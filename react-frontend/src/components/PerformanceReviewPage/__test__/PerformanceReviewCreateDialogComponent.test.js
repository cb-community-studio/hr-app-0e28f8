import React from "react";
import { render, screen } from "@testing-library/react";

import PerformanceReviewCreateDialogComponent from "../PerformanceReviewCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders performanceReview create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PerformanceReviewCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("performanceReview-create-dialog-component")).toBeInTheDocument();
});
