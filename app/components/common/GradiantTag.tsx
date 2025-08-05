type Props = {
  title: string;
  style?: string;
};

export default function GradiantTag({ title, style }: Props) {
  return (
    <div
      className={`w-fit h-[32px] bg-linear-to-r from-[#3B36AB] to-[#79CC56] text-white font-semibold text-sm flex items-center px-3 py-1 rounded-full ${style}`}
    >
      {title}
    </div>
  );
}
