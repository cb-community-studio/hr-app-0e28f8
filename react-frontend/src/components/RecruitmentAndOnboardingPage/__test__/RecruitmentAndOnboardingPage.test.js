import React from "react";
import { render, screen } from "@testing-library/react";

import RecruitmentAndOnboardingPage from "../RecruitmentAndOnboardingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders recruitmentAndOnboarding page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RecruitmentAndOnboardingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("recruitmentAndOnboarding-datatable")).toBeInTheDocument();
    expect(screen.getByRole("recruitmentAndOnboarding-add-button")).toBeInTheDocument();
});
