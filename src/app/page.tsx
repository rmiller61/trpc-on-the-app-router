import { serverClient } from "./_trpc/serverClient";
import { Suspense } from "react";
import TodoList from "./_components/TodoList";

export const dynamic = "force-dynamic";

export default async function Home() {
  const serverRes = await serverClient.getResponse("Hello Friend");
  return (
    <main className="max-w-3xl mx-auto mt-5">
      <h1 className="text-3xl font-bold">{serverRes.message}</h1>
      <Suspense><TodoList /></Suspense>
    </main>
  );
}
