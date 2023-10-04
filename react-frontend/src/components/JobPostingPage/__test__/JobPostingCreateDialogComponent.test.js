import React from "react";
import { render, screen } from "@testing-library/react";

import JobPostingCreateDialogComponent from "../JobPostingCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders jobPosting create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <JobPostingCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("jobPosting-create-dialog-component")).toBeInTheDocument();
});
