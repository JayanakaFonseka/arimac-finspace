type Props = {
  title: string;
};

export default function GradiantBorderTag({ title }: Props) {
  return (
    <div
      className="inline-flex rounded-full p-[1px] w-fit"
      style={{
        background: "linear-gradient(90deg, #625BFF, #79CC56)",
      }}
    >
      <div className="flex items-center px-3 py-1 rounded-full bg-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#625BFF] to-[#79CC56] font-semibold text-sm leading-[21px] md:leading-[26px]">
          {title}
        </span>
      </div>
    </div>
  );
}
