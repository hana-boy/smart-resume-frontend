'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ResultContent() {
  const searchParams = useSearchParams();
  const text = searchParams.get('text');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">職務経歴書（結果）</h1>
      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">{text}</pre>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6 text-center">読み込み中です...</div>}>
      <ResultContent />
    </Suspense>
  );
}
