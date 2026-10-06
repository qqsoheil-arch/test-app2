import { NextResponse } from "next/server";

/**
 * Contact / quote requests.
 *
 * No CRM, mailbox or messaging provider is connected yet, so a valid lead is
 * written to the server log and acknowledged. When the destination is known
 * (email, Telegram bot, CRM webhook) it should be delivered from here instead.
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "درخواست نامعتبر است." },
      { status: 400 },
    );
  }

  const name = String(payload.name ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const productType = String(payload.productType ?? "").trim();
  const details = String(payload.details ?? "").trim();

  if (name.length < 3) {
    return NextResponse.json(
      { error: "نام و نام خانوادگی را کامل وارد کنید." },
      { status: 400 },
    );
  }

  // digits, Persian digits, plus sign, spaces, parentheses and dashes
  if (!/^[\d\u06F0-\u06F9+\-\s()]{8,}$/.test(phone)) {
    return NextResponse.json(
      { error: "شماره تماس معتبر وارد کنید." },
      { status: 400 },
    );
  }

  console.log(
    "[vostadoor] contact request",
    JSON.stringify({
      name,
      phone,
      productType,
      details: details.slice(0, 1000),
      receivedAt: new Date().toISOString(),
    }),
  );

  return NextResponse.json({ ok: true });
}
