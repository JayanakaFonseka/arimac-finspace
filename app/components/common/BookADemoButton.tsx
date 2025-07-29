"use client";
import { useRouter } from "next/navigation";

type Props = {
  btnStyle: string;
};

export const BookADemoButton = ({ btnStyle }: Props) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/contact-us")} className={btnStyle}>
      Book a demo
    </button>
  );
};
