import React from "react";
import { render, screen } from "@testing-library/react";

import OffboardingTerminationPage from "../OffboardingTerminationPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders offboardingTermination page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <OffboardingTerminationPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("offboardingTermination-datatable")).toBeInTheDocument();
    expect(screen.getByRole("offboardingTermination-add-button")).toBeInTheDocument();
});
