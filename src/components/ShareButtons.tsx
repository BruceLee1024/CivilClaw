"use client";

import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWeChat = () => {
    handleCopyLink();
  };

  const shareToWeibo = () => {
    const weiboUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    window.open(weiboUrl, "_blank", "width=600,height=400");
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-text-muted text-sm font-mono">分享：</span>
      
      <button
        onClick={shareToWeChat}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border-color hover:border-[#07C160] hover:text-[#07C160] transition-colors text-sm font-mono"
        title="复制链接（微信分享）"
      >
        <span className="material-symbols-outlined text-lg">chat</span>
        微信
      </button>

      <button
        onClick={shareToWeibo}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border-color hover:border-[#E6162D] hover:text-[#E6162D] transition-colors text-sm font-mono"
        title="分享到微博"
      >
        <span className="material-symbols-outlined text-lg">share</span>
        微博
      </button>

      <button
        onClick={shareToTwitter}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border-color hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-colors text-sm font-mono"
        title="分享到 Twitter"
      >
        <span className="material-symbols-outlined text-lg">share</span>
        Twitter
      </button>

      <button
        onClick={handleCopyLink}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border transition-colors text-sm font-mono ${
          copied
            ? "border-primary text-primary"
            : "border-border-color hover:border-primary hover:text-primary"
        }`}
        title="复制链接"
      >
        <span className="material-symbols-outlined text-lg">
          {copied ? "check" : "link"}
        </span>
        {copied ? "已复制" : "复制链接"}
      </button>
    </div>
  );
}
