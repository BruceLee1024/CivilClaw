import { ReactNode } from "react";

/**
 * 计算 React 内容的字数（简化版本，基于字符串长度估算）
 * @param content ReactNode 内容
 * @returns 字数统计
 */
export function countWords(content: ReactNode): number {
  try {
    // 将 ReactNode 转换为字符串进行简单估算
    const contentStr = JSON.stringify(content);
    
    // 统计中文字符
    const chineseChars = contentStr.match(/[\u4e00-\u9fa5]/g) || [];
    
    // 统计英文单词（连续的字母字符）
    const englishWords = contentStr.match(/[a-zA-Z]+/g) || [];
    
    // 总字数 = 中文字符数 + 英文单词数
    // 由于是 JSON 字符串，会有一些额外字符，所以打个折扣
    const totalWords = chineseChars.length + englishWords.length;
    return Math.floor(totalWords * 0.6); // 估算实际内容约为 60%
  } catch (error) {
    // 如果计算失败，返回一个基于阅读时间的估算值
    return 0;
  }
}

/**
 * 根据字数估算阅读时间
 * @param wordCount 字数
 * @returns 阅读时间（分钟）
 */
export function estimateReadTime(wordCount: number): number {
  // 假设中文阅读速度：300字/分钟
  // 英文阅读速度：200词/分钟
  // 取平均值：250/分钟
  const minutes = Math.ceil(wordCount / 250);
  return Math.max(1, minutes); // 至少1分钟
}
