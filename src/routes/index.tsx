import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mithil Manchukonda — Software Developer & CS Student" },
      {
        name: "description",
        content:
          "Portfolio of Mithil Manchukonda, a B.Tech Computer Science student from Hyderabad building practical software with Python, APIs, and the web. Open to internships.",
      },
      { property: "og:title", content: "Mithil Manchukonda — Software Developer & CS Student" },
      {
        property: "og:description",
        content:
          "Projects, skills, and contact for Mithil Manchukonda — CS student building clean, reliable software.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});
