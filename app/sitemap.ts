// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllCourseSlugs } from "@/lib/coursesData";

const SITE_URL = "https://avacademy.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
    const courseSlugs = getAllCourseSlugs();

    return [
        // ── Main Pages ────────────────────────────────
        {
            url: `${SITE_URL}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/contact-us`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/pricing`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },

        // ── Courses (main) ────────────────────────────
        {
            url: `${SITE_URL}/courses`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        // ── Courses (individual slug pages) ──────────
        ...courseSlugs.map((slug) => ({
            url: `${SITE_URL}/courses/${slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.85,
        })),

        // ── AI Masterclass ────────────────────────────
        {
            url: `${SITE_URL}/ai-masterclass`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        // ── Services ──────────────────────────────────
        {
            url: `${SITE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },

        // ── AI Training ───────────────────────────────
        {
            url: `${SITE_URL}/ai-training`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },

        // ── VR Developer ──────────────────────────────
        {
            url: `${SITE_URL}/vr-developer`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];
}