import React from "react";
import { render, screen } from "@testing-library/react";

import RecruitmentAndOnboardingEditDialogComponent from "../RecruitmentAndOnboardingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders recruitmentAndOnboarding edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RecruitmentAndOnboardingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("recruitmentAndOnboarding-edit-dialog-component")).toBeInTheDocument();
});
