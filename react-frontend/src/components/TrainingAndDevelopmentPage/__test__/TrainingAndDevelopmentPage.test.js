import React from "react";
import { render, screen } from "@testing-library/react";

import TrainingAndDevelopmentPage from "../TrainingAndDevelopmentPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders trainingAndDevelopment page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TrainingAndDevelopmentPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("trainingAndDevelopment-datatable")).toBeInTheDocument();
    expect(screen.getByRole("trainingAndDevelopment-add-button")).toBeInTheDocument();
});
