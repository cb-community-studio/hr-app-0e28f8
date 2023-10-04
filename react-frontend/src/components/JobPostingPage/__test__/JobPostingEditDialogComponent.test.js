import React from "react";
import { render, screen } from "@testing-library/react";

import JobPostingEditDialogComponent from "../JobPostingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders jobPosting edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <JobPostingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("jobPosting-edit-dialog-component")).toBeInTheDocument();
});
