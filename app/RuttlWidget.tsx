"use client";

import { useEffect } from "react";

export default function RuttlWidget() {
  useEffect(() => {
    const el = document.createElement("ruttl-poetry");
    el.setAttribute("id", "rjHOSjF4WRFK1aAIhU51");
    document.body.appendChild(el);

    const script = document.createElement("script");
    script.src = "https://web.ruttl.com/poetry.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(el);
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
