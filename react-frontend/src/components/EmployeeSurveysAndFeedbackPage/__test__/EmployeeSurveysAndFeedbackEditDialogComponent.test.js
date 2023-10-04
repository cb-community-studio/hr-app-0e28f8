import React from "react";
import { render, screen } from "@testing-library/react";

import EmployeeSurveysAndFeedbackEditDialogComponent from "../EmployeeSurveysAndFeedbackEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders employeeSurveysAndFeedback edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmployeeSurveysAndFeedbackEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("employeeSurveysAndFeedback-edit-dialog-component")).toBeInTheDocument();
});
