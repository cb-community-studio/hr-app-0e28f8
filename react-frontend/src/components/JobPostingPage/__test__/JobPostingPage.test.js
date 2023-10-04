import React from "react";
import { render, screen } from "@testing-library/react";

import JobPostingPage from "../JobPostingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders jobPosting page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <JobPostingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("jobPosting-datatable")).toBeInTheDocument();
    expect(screen.getByRole("jobPosting-add-button")).toBeInTheDocument();
});
