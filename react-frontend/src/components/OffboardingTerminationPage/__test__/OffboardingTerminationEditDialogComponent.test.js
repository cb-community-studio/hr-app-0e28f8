import React from "react";
import { render, screen } from "@testing-library/react";

import OffboardingTerminationEditDialogComponent from "../OffboardingTerminationEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders offboardingTermination edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <OffboardingTerminationEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("offboardingTermination-edit-dialog-component")).toBeInTheDocument();
});
