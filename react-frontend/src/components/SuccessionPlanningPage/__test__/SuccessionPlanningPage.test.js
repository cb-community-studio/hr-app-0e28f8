import React from "react";
import { render, screen } from "@testing-library/react";

import SuccessionPlanningPage from "../SuccessionPlanningPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders successionPlanning page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SuccessionPlanningPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("successionPlanning-datatable")).toBeInTheDocument();
    expect(screen.getByRole("successionPlanning-add-button")).toBeInTheDocument();
});
