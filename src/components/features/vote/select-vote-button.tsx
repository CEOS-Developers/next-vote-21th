import Link from 'next/link';

type ButtonProps = {
  text: string;
  href: string;
};

export default function SelectVoteButton({ text, href }: ButtonProps) {
  return (
    <>
      <div className="bg-grayscale-04 group border-grayscale-00-black flex h-24 w-74.5 cursor-pointer items-center justify-between border-2">
        <p className="text-headline-04 text-grayscale-00-black group-hover:text-grayscale-00-black ml-10">{text}</p>
        <Link href={href}>
          <button className="bg-grayscale-03 hover:bg-neutral-01 mr-10 h-10 w-10 rounded-full border-2"></button>
        </Link>
      </div>
    </>
  );
}
