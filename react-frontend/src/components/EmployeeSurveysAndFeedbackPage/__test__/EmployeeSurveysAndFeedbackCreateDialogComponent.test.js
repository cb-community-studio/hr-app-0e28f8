import React from "react";
import { render, screen } from "@testing-library/react";

import EmployeeSurveysAndFeedbackCreateDialogComponent from "../EmployeeSurveysAndFeedbackCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders employeeSurveysAndFeedback create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmployeeSurveysAndFeedbackCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("employeeSurveysAndFeedback-create-dialog-component")).toBeInTheDocument();
});
