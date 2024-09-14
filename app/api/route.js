export function GET(request) {
  console.log(request);
  //return Reesponse.json();
  return new Response("Hello!");
}

// export function POST(request)(){}