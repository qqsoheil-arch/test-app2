"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { productTypeOptions, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-[0.92rem] text-cream transition-colors placeholder:text-muted/50 focus:border-gold/60 focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setError(
          payload.error ??
            "ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید یا تلفنی تماس بگیرید.",
        );
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(
        "ارتباط با سرور برقرار نشد. لطفاً دوباره تلاش کنید یا تلفنی تماس بگیرید.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col justify-center rounded-xl border border-gold/30 bg-gold/5 p-8 text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-full border border-gold/40 text-gold">
          <Icon name="detail" className="size-6" />
        </span>
        <h3 className="mt-5 text-[1.1rem] font-medium text-cream">
          درخواست شما ثبت شد
        </h3>
        <p className="mt-3 text-[0.9rem] leading-[2] text-muted">
          در اولین فرصت برای بررسی نیاز پروژه با شما تماس می‌گیریم. اگر
          موضوع فوری است، از راه‌های زیر سریع‌تر در دسترس هستیم.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={site.contact.phoneHref}
            className="tnum inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[0.9rem] font-medium text-ink"
          >
            <Icon name="phone" className="size-4.5" />
            {site.contact.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="rounded-full border border-white/15 px-6 py-3 text-[0.9rem] text-cream"
          >
            ارسال درخواست دیگر
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="rounded-xl border border-white/8 bg-ink-soft p-6 lg:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 block text-[0.85rem] text-muted">
            نام و نام خانوادگی
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="مثلاً علی رضایی"
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-[0.85rem] text-muted"
          >
            شماره تماس
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
            className={`tnum ${fieldClass}`}
          />
        </div>

        <div>
          <label
            htmlFor="productType"
            className="mb-2 block text-[0.85rem] text-muted"
          >
            نوع محصول
          </label>
          <select
            id="productType"
            name="productType"
            defaultValue={productTypeOptions[0]}
            className={fieldClass}
          >
            {productTypeOptions.map((option) => (
              <option key={option} value={option} className="bg-ink">
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="details"
            className="mb-2 block text-[0.85rem] text-muted"
          >
            توضیحات پروژه
          </label>
          <textarea
            id="details"
            name="details"
            rows={5}
            placeholder="ابعاد تقریبی، سبک مورد نظر و توضیح کوتاه درباره محل نصب"
            className={`${fieldClass} resize-none leading-[2]`}
          />
        </div>
      </div>

      {status === "error" && error ? (
        <p
          role="alert"
          className="mt-5 rounded-lg border border-red-400/30 bg-red-400/5 px-4 py-3 text-[0.85rem] text-red-200"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-7 py-3.5 text-[0.95rem] font-medium text-ink transition-colors duration-300 hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "در حال ارسال…" : "ارسال درخواست"}
      </button>

      <p className="mt-4 text-[0.78rem] leading-[1.9] text-muted/80">
        با ارسال این فرم، برای بررسی پروژه با شما تماس گرفته می‌شود.
      </p>
    </form>
  );
}
