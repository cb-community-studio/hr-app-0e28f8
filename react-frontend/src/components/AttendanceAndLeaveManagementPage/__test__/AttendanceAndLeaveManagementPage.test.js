import React from "react";
import { render, screen } from "@testing-library/react";

import AttendanceAndLeaveManagementPage from "../AttendanceAndLeaveManagementPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders attendanceAndLeaveManagement page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AttendanceAndLeaveManagementPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("attendanceAndLeaveManagement-datatable")).toBeInTheDocument();
    expect(screen.getByRole("attendanceAndLeaveManagement-add-button")).toBeInTheDocument();
});
