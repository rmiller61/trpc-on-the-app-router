import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

//export const runtime = "edge"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id

  return NextResponse.json({
    success: true,
    date: new Date().toString(),
    id,
  })
}
