import { createTRPCRouter, publicProcedure } from "../trpc"

export const listingsRouter = createTRPCRouter({
  getListings: publicProcedure.query(async () => {
    return await fetch("https://stay-awhile-villas-git-dev-social-hustle.vercel.app/api/test").then(
      (res) => res.json()
    )
  })
})
