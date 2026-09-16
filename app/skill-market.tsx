'use client';
import { useMemo, useState } from 'react';
import { BarChart3, Check, ChevronRight, Compass, Database, FileCheck2, FileText, Layers, MessageSquare, Plus, Search, Sparkles, Tags, Users } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from '@/components/ui/sidebar';
import './kv-home.css';
import './skill-market.css';
import SidebarHeaderTools from './sidebar-header-tools';

const skills=[
  {name:'data-analysis',title:'数据分析',category:'数据分析',desc:'对调研数据进行描述统计、交叉对比与趋势分析。',uses:'8.6k',icon:BarChart3,color:'blue'},
  {name:'data-processing',title:'数据处理',category:'数分析',desc:'清洗、转换、归并多来源数据，为洞察建立统一口径。',uses:'7.9k',icon:Database,color:'teal'},
  {name:'data-quality-check',title:'数据质量检查',category:'数分析',desc:'检查缺失、重复、异常值与指标口径不一致。',uses:'5.2k',icon:FileCheck2,color:'mint'},
  {name:'data-query',title:'智能问数',category:'AI Agent',desc:'用自然语言检索结构化数据，并生成可解释图表。',uses:'12.4k',icon:MessageSquare,color:'cyan'},
  {name:'social-listening',title:'社媒舆情监测',category:'需求洞察',desc:'追踪品牌、话题与竞品声量，识别风险和机会。',uses:'9.1k',icon:Sparkles,color:'rose'},
  {name:'insight-understand',title:'需求理解',category:'需求洞察',desc:'将一句业务问题拆解为可执行的研究任务。',uses:'6.8k',icon:Compass,color:'violet'},
  {name:'report-writer',title:'洞察报告',category:'内容创作',desc:'将数据结论组织为客户可读、可分享的研究报告。',uses:'4.7k',icon:FileText,color:'amber'},
  {name:'taxonomy-builder',title:'标签体系构建',category:'知识管理',desc:'为文本与用户反馈建立一致、可复用的分类体系。',uses:'3.9k',icon:Tags,color:'green'},
];
const categories=['全部','数据分析','需求洞察','AI Agent','内容创作','知识管理'];
function Mark(){return <svg viewBox="0 0 42 48" fill="none" aria-hidden="true"><path d="M21 3 37 12v9L21 12 7 20v-8L21 3ZM5 25l16 9 14-8v10l-14 9L5 36V25Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/><path d="m12 17 18 11M12 26l18 11" stroke="currentColor" strokeWidth="3"/></svg>}

export default function SkillMarket({onBack,onOpenChat}:{onBack:()=>void;onOpenChat:()=>void}){
  const [query,setQuery]=useState(''),[category,setCategory]=useState('全部'),[added,setAdded]=useState<string[]>([]);
  const visible=useMemo(()=>skills.filter(s=>(category==='全部'||s.category===category)&&`${s.name}${s.title}${s.desc}`.toLowerCase().includes(query.toLowerCase())),[query,category]);
  return <SidebarProvider className="kv-app skill-app" style={{'--sidebar-width':'260px'} as React.CSSProperties}>
    <Sidebar className="kv-sidebar" collapsible="icon"><SidebarHeader className="kv-side-header"><div className="sidebar-head-row"><button className="kv-brand skill-brand" onClick={onBack}><Mark/><strong>Social Research Pro</strong></button><SidebarHeaderTools items={['帮我分析星冰乐 2025 年的产品卖点与口碑','帮我做一份亚运舆情的日报','NSR 的计算公式是什么']} onSelect={onOpenChat}/></div><button className="kv-new" onClick={onOpenChat} aria-label="新建分析" title="新建分析"><Plus size={18}/>新建分析</button></SidebarHeader><SidebarContent className="kv-side-content"><nav aria-label="主导航"><button className="kv-nav" onClick={onOpenChat}><MessageSquare size={18}/>智能问数</button><button className="kv-nav" onClick={onOpenChat}><FileText size={18}/>专题分析</button><button className="kv-nav" aria-current="page"><Layers size={18}/>资产中心</button><button className="kv-nav" onClick={onOpenChat}><Compass size={18}/>自由探索</button></nav></SidebarContent><SidebarFooter className="kv-side-footer"><span className="kv-team-icon"><Users size={16}/></span><span>品牌研究团队</span><ChevronRight size={15}/></SidebarFooter></Sidebar>
    <main className="skill-main"><header className="skill-top"><div><b>资产中心</b></div><span>{skills.length} 项可用能力</span></header><div className="skill-page"><div className="skill-heading"><div><h1>资产中心</h1><p>浏览和管理可用于研究对话的数据、提示词与能力资产。</p></div><div className="skill-count"><strong>{added.length}</strong><span>已添加</span></div></div><label className="skill-search"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜索资产名称或能力描述"/><span>{visible.length} 个结果</span></label><div className="skill-categories" role="tablist" aria-label="资产分类">{categories.map(c=><button key={c} role="tab" aria-selected={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><div className="skill-grid">{visible.map(skill=>{const Icon=skill.icon,isAdded=added.includes(skill.name);return <article className="skill-card" key={skill.name}><div className="skill-card-head"><span className={`skill-icon ${skill.color}`}><Icon size={18}/></span><span className="skill-official">官方</span><button aria-label={`${isAdded?'移除':'添加'} ${skill.title}`} className={isAdded?'is-added':''} onClick={()=>setAdded(isAdded?added.filter(x=>x!==skill.name):[...added,skill.name])}>{isAdded?<Check size={16}/>:<Plus size={16}/>}</button></div><div className="skill-name"><h2>{skill.name}</h2><span>{skill.title}</span></div><p>{skill.desc}</p><footer><span>{skill.category}</span><span>{skill.uses} 次使用</span></footer></article>})}</div>{visible.length===0&&<div className="skill-empty"><Search size={22}/><p>没有找到匹配的资产</p></div>}</div></main>
  </SidebarProvider>
}
