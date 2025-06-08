'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Smart Resume Generator</h1>
        <p className="text-lg text-gray-600">
          AIの力で、あなたの職務経歴書を瞬時に生成。入力するだけで、エンジニア向けのプロフェッショナルなレジュメが完成します。
        </p>
        <button
          onClick={() => router.push('/resume')}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          職務経歴書を作成する
        </button>
      </div>
    </main>
  );
}
