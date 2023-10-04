import React from "react";
import { render, screen } from "@testing-library/react";

import EmployeeSurveysAndFeedbackPage from "../EmployeeSurveysAndFeedbackPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders employeeSurveysAndFeedback page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmployeeSurveysAndFeedbackPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("employeeSurveysAndFeedback-datatable")).toBeInTheDocument();
    expect(screen.getByRole("employeeSurveysAndFeedback-add-button")).toBeInTheDocument();
});
