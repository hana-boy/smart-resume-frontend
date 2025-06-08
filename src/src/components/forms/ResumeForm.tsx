'use client';
import { useRouter } from 'next/navigation';
import { sendResumeData } from '@/lib/api-client';
import { useState } from 'react';

export default function ResumeForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    github: '',
    zenn: '',
    overview: '',
    highlight1: '',
    highlight2: '',
    skillLang: '',
    skillLangExperience: '',
    skillLangLevel: '',
    skillInfra: '',
    skillInfraExperience: '',
    skillInfraLevel: '',
    companyName: '',
    employmentType: '',
    industry: '',
    capital: '',
    employees: '',
    listed: false,
    periodFrom: '',
    periodTo: '',
    projectTitle: '',
    projectFrom: '',
    projectTo: '',
    projectDesc: '',
    projectRole: '',
    projectChallenges: '',
    projectContrib: '',
    projectOutcomes: '',
    projectPhases: '',
    techLanguages: '',
    techFrameworks: '',
    techDb: '',
    techOs: '',
    techInfra: '',
    techTools: '',
    certificationName: '',
    certificationDate: '',
    studyGroup: '',
    selfLearning: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const newValue = type === 'checkbox' ? target.checked : value;
    setForm(prev => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const today = new Date().toISOString().split('T')[0];

    const requestBody = {
      basicInfo: {
        name: form.name,
        createdAt: today,
        email: form.email,
        links: {
          github: form.github,
          zenn: form.zenn,
        },
      },
      summary: {
        overview: form.overview,
        highlights: [form.highlight1, form.highlight2],
      },
      skills: [
        {
          category: 'Language',
          name: form.skillLang,
          experience: form.skillLangExperience,
          level: form.skillLangLevel,
        },
        {
          category: 'Infrastructure',
          name: form.skillInfra,
          experience: form.skillInfraExperience,
          level: form.skillInfraLevel,
        },
      ],
      workHistory: [
        {
          company: {
            name: form.companyName,
            employmentType: form.employmentType,
            industry: form.industry,
            capital: form.capital,
            employees: parseInt(form.employees),
            listed: form.listed,
            period: { from: form.periodFrom, to: form.periodTo },
          },
          projects: [
            {
              title: form.projectTitle,
              period: { from: form.projectFrom, to: form.projectTo },
              teamSize: 100,
              engineers: 25,
              description: form.projectDesc,
              phases: form.projectPhases.split(',').map(p => p.trim()),
              role: form.projectRole,
              challenges: form.projectChallenges,
              contributions: form.projectContrib,
              outcomes: form.projectOutcomes,
              technologies: {
                languages: form.techLanguages.split(',').map(t => t.trim()),
                frameworks: form.techFrameworks.split(',').map(t => t.trim()),
                db: form.techDb.split(',').map(t => t.trim()),
                os: form.techOs.split(',').map(t => t.trim()),
                infra: form.techInfra.split(',').map(t => t.trim()),
                tools: form.techTools.split(',').map(t => t.trim()),
              },
            },
          ],
        },
      ],
      certifications: [
        { name: form.certificationName, date: form.certificationDate },
      ],
      activities: {
        studyGroups: [form.studyGroup],
        selfLearning: [form.selfLearning],
      },
    };

    const result = await sendResumeData(requestBody);
    router.push(`/resume/result?text=${encodeURIComponent(result)}`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-bold">
        経歴書作成中です...
        作成には10〜20秒程度かかることがあります。
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold">基本情報</h2>
      <input className="border p-2 w-full" name="name" placeholder="氏名" onChange={handleChange} />
      <input className="border p-2 w-full" name="email" placeholder="メールアドレス" onChange={handleChange} />
      <input className="border p-2 w-full" name="github" placeholder="GitHub URL" onChange={handleChange} />
      <input className="border p-2 w-full" name="zenn" placeholder="Zenn URL" onChange={handleChange} />

      <h2 className="text-xl font-bold">概要・強み</h2>
      <textarea className="border p-2 w-full" name="overview" placeholder="概要" onChange={handleChange} />
      <input className="border p-2 w-full" name="highlight1" placeholder="強み①" onChange={handleChange} />
      <input className="border p-2 w-full" name="highlight2" placeholder="強み②" onChange={handleChange} />

      <h2 className="text-xl font-bold">スキル</h2>
      <input className="border p-2 w-full" name="skillLang" placeholder="言語（例：PHP）" onChange={handleChange} />
      <input className="border p-2 w-full" name="skillLangExperience" placeholder="言語の経験（例：1年10ヶ月）" onChange={handleChange} />
      <input className="border p-2 w-full" name="skillLangLevel" placeholder="言語のレベル（例：業務で使用可能）" onChange={handleChange} />
      <input className="border p-2 w-full" name="skillInfra" placeholder="インフラ（例：Docker）" onChange={handleChange} />
      <input className="border p-2 w-full" name="skillInfraExperience" placeholder="インフラの経験（例：1年10ヶ月）" onChange={handleChange} />
      <input className="border p-2 w-full" name="skillInfraLevel" placeholder="インフラのレベル（例：基本的な環境構築が可能）" onChange={handleChange} />

      <h2 className="text-xl font-bold">職務経歴</h2>
      <input className="border p-2 w-full" name="companyName" placeholder="会社名" onChange={handleChange} />
      <input className="border p-2 w-full" name="employmentType" placeholder="雇用形態（正社員など）" onChange={handleChange} />
      <input className="border p-2 w-full" name="industry" placeholder="業種" onChange={handleChange} />
      <input className="border p-2 w-full" name="capital" placeholder="資本金" onChange={handleChange} />
      <input className="border p-2 w-full" name="employees" placeholder="従業員数" onChange={handleChange} />
      <label className="flex items-center">
        <input type="checkbox" name="listed" onChange={handleChange} className="mr-2" />上場企業
      </label>
      <input className="border p-2 w-full" name="periodFrom" type="month" onChange={handleChange} placeholder="在籍開始" />
      <input className="border p-2 w-full" name="periodTo" type="month" onChange={handleChange} placeholder="在籍終了" />

      <h2 className="text-xl font-bold">プロジェクト</h2>
      <input className="border p-2 w-full" name="projectTitle" placeholder="プロジェクト名" onChange={handleChange} />
      <input className="border p-2 w-full" name="projectFrom" type="month" onChange={handleChange} placeholder="開始" />
      <input className="border p-2 w-full" name="projectTo" type="month" onChange={handleChange} placeholder="終了" />
      <textarea className="border p-2 w-full" name="projectDesc" placeholder="概要" onChange={handleChange} />
      <input className="border p-2 w-full" name="projectRole" placeholder="役割" onChange={handleChange} />
      <input className="border p-2 w-full" name="projectChallenges" placeholder="課題" onChange={handleChange} />
      <input className="border p-2 w-full" name="projectContrib" placeholder="貢献" onChange={handleChange} />
      <input className="border p-2 w-full" name="projectOutcomes" placeholder="成果" onChange={handleChange} />
      <input className="border p-2 w-full" name="projectPhases" placeholder="フェーズ（カンマ区切り）" onChange={handleChange} />

      <h2 className="text-xl font-bold">技術スタック</h2>
      <input className="border p-2 w-full" name="techLanguages" placeholder="言語（カンマ区切り）" onChange={handleChange} />
      <input className="border p-2 w-full" name="techFrameworks" placeholder="フレームワーク（カンマ区切り）" onChange={handleChange} />
      <input className="border p-2 w-full" name="techDb" placeholder="DB（カンマ区切り）" onChange={handleChange} />
      <input className="border p-2 w-full" name="techOs" placeholder="OS（カンマ区切り）" onChange={handleChange} />
      <input className="border p-2 w-full" name="techInfra" placeholder="インフラ（カンマ区切り）" onChange={handleChange} />
      <input className="border p-2 w-full" name="techTools" placeholder="ツール（カンマ区切り）" onChange={handleChange} />

      <h2 className="text-xl font-bold">資格・活動</h2>
      <input className="border p-2 w-full" name="certificationName" placeholder="資格名" onChange={handleChange} />
      <input className="border p-2 w-full" name="certificationDate" type="month" onChange={handleChange} />
      <input className="border p-2 w-full" name="studyGroup" placeholder="勉強会名" onChange={handleChange} />
      <input className="border p-2 w-full" name="selfLearning" placeholder="自己学習内容" onChange={handleChange} />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded w-full disabled:opacity-50"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        職務経歴書を送信する
      </button>
    </div>
  );
}
