"use client";

import { useState } from "react";

export default function SubmitBtn() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <button
      type="submit"
      onClick={() => setIsSubmitting(true)}
      disabled={isSubmitting}
      className={`group mt-6 w-32 h-12 rounded-full flex items-center justify-center
        bg-gray-900 text-white dark:bg-white dark:text-black 
        transition-all hover:scale-110
        ${isSubmitting ? "animate-pulse cursor-not-allowed opacity-70" : ""}
      `}
    >
      {isSubmitting ? "Sending..." : "Submit"}
    </button>
  );
}
