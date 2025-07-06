/*"use client";

import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`group mt-6 w-32 h-12 rounded-full flex items-center justify-center
        bg-gray-900 text-white dark:bg-white dark:text-black 
        transition-all hover:scale-110
        ${pending ? "animate-pulse cursor-not-allowed opacity-70" : ""}
      `}
    >
      {pending ? "Sending..." : "Submit"}
    </button>
  );
}*/

// components/submit-btn.tsx
"use client";

type Props = {
  isSubmitting: boolean;
};

export default function SubmitBtn({ isSubmitting }: Props) {
  return (
    <button
      type="submit"
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

