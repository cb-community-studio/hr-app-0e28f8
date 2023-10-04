import React from "react";
import { render, screen } from "@testing-library/react";

import AttendanceAndLeaveManagementCreateDialogComponent from "../AttendanceAndLeaveManagementCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders attendanceAndLeaveManagement create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AttendanceAndLeaveManagementCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("attendanceAndLeaveManagement-create-dialog-component")).toBeInTheDocument();
});
