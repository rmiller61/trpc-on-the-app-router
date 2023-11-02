import { listingsRouter } from "./routes/listings";
import { responseRouter } from "./routes/response";
import {createTRPCRouter} from "../server/trpc";



export const appRouter = createTRPCRouter({
  listings: listingsRouter,
  response: responseRouter,

});

export type AppRouter = typeof appRouter;
