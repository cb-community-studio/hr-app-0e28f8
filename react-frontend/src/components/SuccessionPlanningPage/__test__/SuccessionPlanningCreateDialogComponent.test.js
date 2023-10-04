import React from "react";
import { render, screen } from "@testing-library/react";

import SuccessionPlanningCreateDialogComponent from "../SuccessionPlanningCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders successionPlanning create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SuccessionPlanningCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("successionPlanning-create-dialog-component")).toBeInTheDocument();
});
