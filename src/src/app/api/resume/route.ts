import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const cloudRunUrl = 'http://localhost:8080/resume';
  // const cloudRunUrl = 'https://api-694481300447.asia-northeast1.run.app/resume';

  const res = await fetch(cloudRunUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();

  return new NextResponse(text, {
    status: res.status,
  });
}
