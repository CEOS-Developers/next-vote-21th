import Link from 'next/link';

type ButtonProps = {
  text: string;
  href: string;
};

export default function Button({ text, href }: ButtonProps) {
  return (
    <Link href={href}>
      <div className="bg-grayscale-00-black hover:bg-neutral-02 group flex h-12 cursor-pointer items-center justify-center rounded-[50] drop-shadow-[4px_6px_8px_rgba(0,0,0,0.25)]">
        <p className="text-caption-02 text-grayscale-05-white group-hover:text-grayscale-00-black">{text}</p>
      </div>
    </Link>
  );
}
