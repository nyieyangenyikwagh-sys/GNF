"use client";

import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const resources = [
  {
    title: "How to Reduce Claim Rejections in Canada",
    category: "Billing Tips",
    date: "May 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    description:
      "Learn proven techniques to reduce rejected claims and improve reimbursement rates.",
  },
  {
    title: "Growing Your Medical Practice with Better Billing",
    category: "Practice Growth",
    date: "April 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
    description:
      "Discover how streamlined billing workflows increase revenue and reduce administrative work.",
  },
  {
    title: "Understanding OHIP Billing Best Practices",
    category: "OHIP",
    date: "March 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    description:
      "Everything physicians should know about accurate claim submissions and compliance.",
  },
];

export default function Resources() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Resources
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Learn from Canada's
            <span className="block text-blue-700">
              Billing Experts
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Stay updated with billing insights, OHIP guidance,
            practice management strategies, and healthcare news.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {resources.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
                  {item.category}
                </span>
              </div>

              <div className="p-8">
                <div className="flex gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {item.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {item.readTime}
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 transition group-hover:text-red-600">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-700 transition group-hover:gap-4">
                  Read Article
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-red-600 p-12 text-white">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-4xl font-bold">
                Never Miss a Billing Update
              </h3>

              <p className="mt-5 text-lg text-blue-100">
                Receive the latest OHIP updates, billing tips,
                healthcare regulations, and product improvements
                directly in your inbox.
              </p>
            </div>

            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border-none px-6 py-4 text-slate-900 outline-none"
              />

              <button
                type="submit"
                className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}