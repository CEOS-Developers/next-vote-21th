import Link from 'next/link';

type ButtonProps =
  | {
      text: string;
      href: string;
      onClick?: never;
    }
  | {
      text: string;
      onClick: () => void;
      href?: never;
    };

export default function Button({ text, href, onClick }: ButtonProps) {
  const content = (
    <div className="bg-grayscale-00-black hover:bg-neutral-02 group flex h-12 cursor-pointer items-center justify-center rounded-[50] drop-shadow-[4px_6px_8px_rgba(0,0,0,0.25)]">
      <p className="text-caption-02 text-grayscale-05-white group-hover:text-grayscale-00-black">{text}</p>
    </div>
  );

  if (href) return <Link href={href}>{content}</Link>;

  return (
    <button type="button" onClick={onClick} className="w-full">
      {content}
    </button>
  );
}
