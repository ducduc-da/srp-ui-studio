'use client';
import { useMemo, useState } from 'react';
import { MessageSquare, Search } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import './sidebar-header-tools.css';
import './sidebar-collapsed-refine.css';

export default function SidebarHeaderTools({items,onSelect}:{items:string[];onSelect?:(item:string)=>void}){
  const [open,setOpen]=useState(false),[query,setQuery]=useState('');
  const results=useMemo(()=>items.filter(item=>item.toLowerCase().includes(query.toLowerCase())),[items,query]);
  return <><div className="sidebar-header-tools"><button className="sidebar-chat-search" title="搜索聊天" aria-label="搜索聊天" onClick={()=>{setQuery('');setOpen(true)}}><Search size={17}/></button><SidebarTrigger className="sidebar-collapse" title="收起侧边栏"/></div><Dialog open={open} onOpenChange={setOpen}><DialogContent className="sidebar-search-dialog"><DialogTitle>搜索聊天</DialogTitle><DialogDescription>从任务和最近对话中查找</DialogDescription><label><Search size={17}/><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="输入关键词…"/></label><div className="sidebar-search-list">{results.map(item=><button key={item} onClick={()=>{onSelect?.(item);setOpen(false)}}><MessageSquare size={15}/><span>{item}</span></button>)}{results.length===0&&<p>没有找到匹配的对话</p>}</div></DialogContent></Dialog></>
}
