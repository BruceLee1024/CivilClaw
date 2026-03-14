import Link from "next/link";
import { notFound } from "next/navigation";
import { articlesMeta, articleContent } from "@/data/articles/index";
import ShareButtons from "@/components/ShareButtons";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import { countWords } from "@/utils/wordCount";

export function generateStaticParams() {
  return articlesMeta.map((a) => ({ id: a.id }));
}

const relatedFor = (currentId: string) => {
  const currentArticle = articlesMeta.find((a) => a.id === currentId);
  if (!currentArticle) return [];

  // 基于标签相似度推荐
  const scored = articlesMeta
    .filter((a) => a.id !== currentId)
    .map((article) => {
      let score = 0;
      // 相同标签得分最高
      if (article.tag === currentArticle.tag) score += 10;
      // 都是置顶文章加分
      if (article.featured && currentArticle.featured) score += 5;
      // 相同作者加分
      if (article.author === currentArticle.author) score += 3;
      return { article, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.article);

  return scored;
};

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = articlesMeta.find((a) => a.id === id);
  const content = articleContent[id];

  if (!article || !content) notFound();

  const related = relatedFor(id);
  const wordCount = countWords(content);

  return (
    <>
      <ReadingProgress />
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-border-color bg-background-dark/90 backdrop-blur px-6 lg:px-10 py-3 w-full">
        <div className="flex items-center gap-4 text-text-main">
          <div className="size-6 bg-primary text-black flex items-center justify-center rounded-sm">
            <span className="material-symbols-outlined text-sm font-bold">
              hub
            </span>
          </div>
          <h2 className="text-text-main text-xl font-bold leading-tight tracking-wider uppercase">
            CivilClaw
          </h2>
        </div>
        <Link
          href="/blog"
          className="text-text-muted hover:text-primary transition-colors text-sm font-mono uppercase tracking-widest flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          返回文章
        </Link>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Article */}
          <article className="flex flex-col gap-6 lg:col-span-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "首页", href: "/" },
              { label: "养虾手册", href: "/blog" },
              { label: article.title },
            ]}
          />

          <div className="flex items-center gap-3 mb-2">
            <span
              className={`inline-flex items-center justify-center px-4 py-1 rounded-full border bg-black text-xs font-mono uppercase tracking-widest shadow-[0_0_10px_rgba(255,0,122,0.2)] ${article.tagClass}`}
            >
              {article.tag}
            </span>
            {article.featured && (
              <span className="inline-flex items-center justify-center px-4 py-1 rounded-full border border-primary text-primary bg-black text-xs font-mono uppercase tracking-widest">
                置顶
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight tracking-tight text-text-main">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-xs font-mono text-text-muted flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">
                person
              </span>
              <span className="text-text-main font-bold uppercase tracking-wider">
                {article.author}
              </span>
            </div>
            <span className="text-border-color">/</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">
                calendar_today
              </span>
              <span>{article.date}</span>
            </div>
            <span className="text-border-color">/</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">
                schedule
              </span>
              <span>阅读 {article.readTime}</span>
            </div>
            <span className="text-border-color">/</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">
                text_fields
              </span>
              <span>{wordCount.toLocaleString()} 字</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="mt-4 space-y-6">{content}</div>

          {/* Share Buttons */}
          <div className="mt-8 pt-6 border-t border-border-color">
            <ShareButtons 
              title={article.title} 
              url={`https://civilclaw.com/blog/${id}`} 
            />
          </div>
        </article>

        {/* Table of Contents - Desktop */}
        <aside className="hidden lg:block lg:col-span-4">
          <TableOfContents />
        </aside>
      </div>

      <div className="max-w-7xl mx-auto mt-12 flex flex-col gap-12">
        <hr className="border-border-color" />

        {/* Author Bio */}
        <div className="bg-surface rounded-[2rem] border border-border-color p-6 flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-surface-hover border border-border-color flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-3xl text-primary">
              engineering
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-text-main font-bold">{article.author}</span>
            <p className="text-text-muted text-sm font-mono">
              土木工程师 · CivilClaw 社区成员 · 用 AI Agent 探索工程工作流自动化
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="w-full">
          <h2 className="text-xl font-bold text-text-main mb-6 uppercase tracking-wider">
            相关文章
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((a) => (
              <Link
                key={a.id}
                href={`/blog/${a.id}`}
                className="group bg-surface rounded-xl border border-border-color p-5 hover:border-primary/50 transition-colors"
              >
                <span
                  className={`px-2 py-0.5 rounded-full border bg-black text-[10px] font-bold uppercase ${a.tagClass}`}
                >
                  {a.tag}
                </span>
                <h3 className="text-sm font-bold text-text-main mt-3 group-hover:text-primary transition-colors line-clamp-2">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </main>
      <BackToTop />
    </>
  );
}
