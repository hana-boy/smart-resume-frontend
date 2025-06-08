import { ResumeRequest } from './types';
export async function sendResumeData(data: ResumeRequest): Promise<string> {
  const res = await fetch('/api/resume', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('送信に失敗しました');
  return res.text();
}
