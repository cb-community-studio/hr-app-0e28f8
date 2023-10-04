import React from "react";
import { render, screen } from "@testing-library/react";

import TrainingAndDevelopmentEditDialogComponent from "../TrainingAndDevelopmentEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders trainingAndDevelopment edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TrainingAndDevelopmentEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("trainingAndDevelopment-edit-dialog-component")).toBeInTheDocument();
});
