"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  variant?: "hero" | "inline" | "footer";
  title?: string;
  description?: string;
}

export function NewsletterSignup({
  variant = "inline",
  title = "Get the weekly India acquisition briefing",
  description = "Join 1,000+ entrepreneurs learning how to buy businesses in India.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - bots will fill this
    if (honeypot) {
      setStatus("success");
      setMessage("Thanks for subscribing!");
      return;
    }

    if (!email) return;

    setStatus("loading");

    try {
      // TODO: Replace with actual ConvertKit/Buttondown integration
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Check your inbox to confirm your subscription!");
        setEmail("");
      } else {
        throw new Error("Subscription failed");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (variant === "hero") {
    return (
      <div className="w-full max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        
        {status === "success" ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-800">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            {/* Honeypot - hidden from users, filled by bots */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              style={{ position: "absolute", left: "-9999px" }}
              aria-hidden="true"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe Free"}
            </button>
          </form>
        )}
        
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">{message}</p>
        )}
        
        <p className="mt-3 text-xs text-gray-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    );
  }

  // Inline variant (for end of articles)
  return (
    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 my-12">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {status === "success" ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-800">
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          {/* Honeypot */}
          <input
            type="text"
            name="company_website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            style={{ position: "absolute", left: "-9999px" }}
            aria-hidden="true"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50 transition-colors"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
      )}
      
      {status === "error" && (
        <p className="mt-2 text-sm text-red-600">{message}</p>
      )}
    </div>
  );
}
