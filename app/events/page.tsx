// app/events/page.tsx
import type { Metadata } from "next";
import EventsClient from "./Eventsclient";

export const metadata: Metadata = {
    title: "Events & Gallery | AV Academy Lucknow",
    description: "Explore AV Academy events, workshops, corporate AI training sessions and certification gallery. Real events, real impact.",
    keywords: ["AV Academy events", "workshop lucknow", "AI training event", "certification ceremony", "av academy gallery"],
};

export default function EventsPage() {
    return <EventsClient />;
}