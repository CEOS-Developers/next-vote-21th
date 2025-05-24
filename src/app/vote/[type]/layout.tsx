import GNB from '@/components/layouts/GNB';

export default function VoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <GNB />
      {children}
    </div>
  );
}
