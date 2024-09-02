import IssuesContainer from "./_components/issues-container";
import { Suspense } from "react";
import CreateIssue from "./_components/create-issue";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-start justify-between font-mono text-sm flex flex-col gap-5">
                <h1 className="text-3xl">Your Issues</h1>
                <CreateIssue />
                <Suspense fallback={<p>loading..</p>}>
                    <IssuesContainer />
                </Suspense>
            </div>
        </main>
    );
}
