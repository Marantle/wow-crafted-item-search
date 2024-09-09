export async function GET() {
  console.log("Test route hit");
  return new Response("Test route working", { status: 200 });
}
