interface LastUpdatedProps {
  date: string; // Format: "February 2026" or ISO date
  className?: string;
}

export function LastUpdated({ date, className = "" }: LastUpdatedProps) {
  return (
    <p className={`text-sm text-gray-500 mb-6 ${className}`}>
      Last updated: {date}
    </p>
  );
}

interface AuthorBylineProps {
  authorName?: string;
  authorInitials?: string;
  readTime: string;
  className?: string;
}

export function AuthorByline({
  authorName = "Buy a Business India",
  authorInitials = "BA",
  readTime,
  className = "",
}: AuthorBylineProps) {
  return (
    <div className={`flex items-center space-x-3 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200 ${className}`}>
      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold">
        {authorInitials}
      </div>
      <div>
        <p className="font-medium text-gray-900">{authorName}</p>
        <p className="text-sm">{readTime}</p>
      </div>
    </div>
  );
}

interface KeyInsightProps {
  children: React.ReactNode;
  className?: string;
}

export function KeyInsight({ children, className = "" }: KeyInsightProps) {
  return (
    <div className={`bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-6 my-8 ${className}`}>
      <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2">
        Key Insight
      </p>
      <p className="text-lg font-medium text-gray-900">{children}</p>
    </div>
  );
}
