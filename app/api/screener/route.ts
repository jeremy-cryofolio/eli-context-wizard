import { type NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  // In the real world, we'd save to the DB here
  console.log(`Data: ${JSON.stringify(data)} was posted to /api/screener`);

  return new Response(null, { status: 200 });
};
