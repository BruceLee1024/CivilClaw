import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";

// 导入所有文章
import * as installGuide from "./install-guide";
import * as autoReview from "./auto-review";
import * as pkpmCompare from "./pkpm-compare";
import * as geotechSkill from "./geotech-skill";
import * as rebarOptimizer from "./rebar-optimizer";
import * as bomCalc from "./bom-calc";
import * as skillSpecQuery from "./skill-spec-query";
import * as skillDailyReport from "./skill-daily-report";
import * as skillCostExcel from "./skill-cost-excel";
import * as skillPaperTrack from "./skill-paper-track";
import * as skillNotionExam from "./skill-notion-exam";
import * as skillBrowserBim from "./skill-browser-bim";
import * as projectManagementAgent from "./project-management-agent";
import * as pkpmAutomation from "./pkpm-automation";
import * as civilSkillsDev from "./civil-skills-dev";
import * as constructionProgressAgent from "./construction-progress-agent";
import * as costEstimationAgent from "./cost-estimation-agent";
import * as skillsCompleteGuide from "./skills-complete-guide";

// 导出类型
export type { ArticleMeta } from "./types";

// 聚合所有文章元数据
export const articlesMeta: ArticleMeta[] = [
  installGuide.meta,
  autoReview.meta,
  pkpmCompare.meta,
  geotechSkill.meta,
  rebarOptimizer.meta,
  bomCalc.meta,
  skillSpecQuery.meta,
  skillDailyReport.meta,
  skillCostExcel.meta,
  skillPaperTrack.meta,
  skillNotionExam.meta,
  skillBrowserBim.meta,
  projectManagementAgent.meta,
  pkpmAutomation.meta,
  civilSkillsDev.meta,
  constructionProgressAgent.meta,
  costEstimationAgent.meta,
  skillsCompleteGuide.meta,
];

// 聚合所有文章内容
export const articleContent: Record<string, ReactNode> = {
  "install-guide": installGuide.content,
  "auto-review": autoReview.content,
  "pkpm-compare": pkpmCompare.content,
  "geotech-skill": geotechSkill.content,
  "rebar-optimizer": rebarOptimizer.content,
  "bom-calc": bomCalc.content,
  "skill-spec-query": skillSpecQuery.content,
  "skill-daily-report": skillDailyReport.content,
  "skill-cost-excel": skillCostExcel.content,
  "skill-paper-track": skillPaperTrack.content,
  "skill-notion-exam": skillNotionExam.content,
  "skill-browser-bim": skillBrowserBim.content,
  "project-management-agent": projectManagementAgent.content,
  "pkpm-automation": pkpmAutomation.content,
  "civil-skills-dev": civilSkillsDev.content,
  "construction-progress-agent": constructionProgressAgent.content,
  "cost-estimation-agent": costEstimationAgent.content,
  "skills-complete-guide": skillsCompleteGuide.content,
};
