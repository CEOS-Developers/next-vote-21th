import Image from "next/image";
import Link from "next/link";

const VoteButton = ({ href, label }: { href: string; label: string }) => {
  return (
    <div className="px-4 py-2">
      <Link
        href={href}
        className="border-home-btn shadow-08 flex justify-between rounded-[9px] px-5 py-[22px] md:py-9"
      >
        <div className="font-headline-1">{label}</div>
        <Image src="/svgs/arrow.svg" alt="화살표" width={11} height={20} />
      </Link>
    </div>
  );
};

export default VoteButton;
