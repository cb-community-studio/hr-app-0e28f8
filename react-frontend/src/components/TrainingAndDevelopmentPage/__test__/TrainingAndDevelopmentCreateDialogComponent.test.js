import React from "react";
import { render, screen } from "@testing-library/react";

import TrainingAndDevelopmentCreateDialogComponent from "../TrainingAndDevelopmentCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders trainingAndDevelopment create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TrainingAndDevelopmentCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("trainingAndDevelopment-create-dialog-component")).toBeInTheDocument();
});
