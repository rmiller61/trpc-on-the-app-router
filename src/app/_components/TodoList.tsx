"use client";
import { useState } from "react";

import { trpc } from "../_trpc/client";

export default function TodoList() {
  const {data} = trpc.getListings.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    suspense: true,
  });

  return (
    <div>
      <div className="text-black my-5 text-3xl">
        {data ? <>{JSON.stringify(data)}</> : "Loading..."}
      </div>
    </div>
  );
}
