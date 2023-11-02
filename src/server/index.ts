import { z } from "zod";
import { publicProcedure, router } from "./trpc";




export const appRouter = router({
  getListings: publicProcedure.query(async () => {
    return await fetch("https://stay-awhile-villas-git-dev-social-hustle.vercel.app/api/test").then(
      (res) => res.json()
    )
  }),
  getResponse: publicProcedure.input(z.string()).query(async ({input}) => {
    return {
      message: input
    }
  }),

});

export type AppRouter = typeof appRouter;
