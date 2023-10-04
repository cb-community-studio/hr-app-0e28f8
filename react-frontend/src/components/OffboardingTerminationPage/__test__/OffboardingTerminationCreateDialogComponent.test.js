import React from "react";
import { render, screen } from "@testing-library/react";

import OffboardingTerminationCreateDialogComponent from "../OffboardingTerminationCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders offboardingTermination create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <OffboardingTerminationCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("offboardingTermination-create-dialog-component")).toBeInTheDocument();
});
