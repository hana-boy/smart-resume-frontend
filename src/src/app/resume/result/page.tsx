'use client';
import { useSearchParams } from 'next/navigation';
import ResumePreview from '@/components/outputs/ResumePreview';

export default function ResumeResultPage() {
  const searchParams = useSearchParams();
  const result = searchParams.get('text') || '';
  return <div className="p-6"><ResumePreview content={result} /></div>;
}
