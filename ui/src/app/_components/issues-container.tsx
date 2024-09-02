import React from "react";
import IssuesTable from "./issues-table";

export default async function IssuesContainer() {
    const res = await fetch("http://localhost:8080/api/issues", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-sitemate-signature": "test_123",
        },
    });

    const issues = await res.json();

    return (
        <div>
            <IssuesTable issues={issues.data} />
        </div>
    );
}
