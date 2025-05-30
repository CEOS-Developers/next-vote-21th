import Link from 'next/link';

type BackProps = {
  href: string;
};

export default function Back({ href }: BackProps) {
  return (
    <Link href={href} className="border-grayscale-00-black h-5 w-5 rotate-45 rounded-sm border-b-4 border-l-4"></Link>
  );
}
