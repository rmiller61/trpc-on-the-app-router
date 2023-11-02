import { createTRPCRouter, publicProcedure } from "../trpc"
import { z } from "zod"

export const responseRouter = createTRPCRouter({
    getResponse: publicProcedure.input(z.string()).query(async ({input}) => {
        return {
          message: input
        }
      }),
})
