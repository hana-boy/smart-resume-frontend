'use client';

import { useState } from 'react';
import { Button } from '@/app/components/ui/button';

export default function ResumePage() {
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const requestBody = {
      basicInfo: {
        name: '山田 太郎',
        createdAt: '2024-10-17',
        email: 'yamada@example.com',
        links: {
          github: 'https://github.com/yamada',
          zenn: 'https://zenn.dev/yamada',
        },
      },
      summary: {
        overview: '現職では、スクラムチームで要件定義からテストまで一貫して担当しています。',
        highlights: [
          'LaravelによるWebアプリケーション開発経験',
          'Nextjsを使ったフロントエンド構築',
        ],
      },
      skills: [
        {
          category: 'Language',
          name: 'PHP',
          experience: '1年10ヶ月',
          level: '業務で使用可能',
        },
        {
          category: 'Infrastructure',
          name: 'Docker',
          experience: '1年10ヶ月',
          level: '基本的な環境構築が可能',
        },
      ],
      workHistory: [
        {
          company: {
            name: 'XXX株式会社',
            employmentType: '正社員',
            industry: 'システム受託開発',
            capital: '5000万円',
            employees: 70,
            listed: false,
            period: {
              from: '2023-01',
              to: '現在',
            },
          },
          projects: [
            {
              title: 'シニア向け健康促進サービス',
              period: {
                from: '2023-01',
                to: '現在',
              },
              teamSize: 100,
              engineers: 25,
              description: '健康的な行動でポイントが付くWebサービスの開発',
              phases: ['要件定義', '設計', '実装', 'テスト', '運用'],
              role: 'バックエンド開発全般を担当',
              challenges: 'GCP利用におけるコスト最適化',
              contributions: 'BigQueryクエリの最適化を主導',
              outcomes: '月額コストを30%削減',
              technologies: {
                languages: ['PHP', 'JavaScript', 'TypeScript'],
                frameworks: ['Laravel', 'Vue.js', 'Nuxt.js'],
                db: ['MySQL'],
                os: ['Linux', 'MacOS'],
                infra: ['Docker', 'GCP(GKE)', 'GitHub Actions'],
                tools: ['GitHub'],
              },
            },
          ],
        },
      ],
      certifications: [{ name: '基本情報技術者', date: '2024-05' }],
      activities: {
        studyGroups: ['Laravel JP Meetup'],
        selfLearning: ['AtCoderで競技プログラミングを継続中'],
      },
    };

    const res = await fetch('/api/resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const text = await res.text();
    setResponse(text);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">職務経歴書API送信テスト</h1>
      <Button className="w-full" onClick={handleSubmit}>
        職務経歴書を送信
      </Button>
      {response && (
        <div className="mt-6 p-4 border rounded bg-gray-50 whitespace-pre-wrap">
          <h2 className="font-bold mb-2">APIレスポンス</h2>
          {response}
        </div>
      )}
    </div>
  );
}
