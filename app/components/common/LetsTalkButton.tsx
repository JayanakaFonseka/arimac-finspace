"use client";
import { useRouter } from "next/navigation";

type Props = {
  btnStyle: string;
};

export const LetsTalkButton = ({ btnStyle }: Props) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/contact-us")} className={btnStyle}>
      Let’s talk
    </button>
  );
};
