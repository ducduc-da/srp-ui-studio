'use client';
import { useState } from 'react';
import { FolderOpen, MoreHorizontal, Pencil, Save, Share2, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import './sidebar-row-actions.css';
import './sidebar-row-actions-refine.css';

export default function SidebarRowActions({title,onRename}:{title:string;onRename?:(title:string)=>void}){
  const [renameOpen,setRenameOpen]=useState(false),[draft,setDraft]=useState(title);
  function stop(e:React.SyntheticEvent){e.stopPropagation()}
  return <span className="sidebar-actions" onClick={stop} onKeyDown={stop}>
    <DropdownMenu><DropdownMenuTrigger className="sidebar-more" aria-label={`${title}的更多操作`}><MoreHorizontal size={16}/></DropdownMenuTrigger><DropdownMenuContent className="sidebar-action-menu" side="right" align="start"><DropdownMenuItem><FolderOpen size={16}/>打开</DropdownMenuItem><DropdownMenuItem onClick={()=>{setDraft(title);setRenameOpen(true)}}><Pencil size={16}/>重命名</DropdownMenuItem><DropdownMenuItem><Save size={16}/>保存到工作空间</DropdownMenuItem><DropdownMenuItem><Share2 size={16}/>分享</DropdownMenuItem><DropdownMenuItem className="sidebar-delete"><Trash2 size={16}/>删除</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
    <Dialog open={renameOpen} onOpenChange={setRenameOpen}><DialogContent className="sidebar-rename-dialog"><DialogTitle>重命名对话</DialogTitle><DialogDescription>保持简短且易于识别</DialogDescription><input autoFocus value={draft} onChange={e=>setDraft(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&draft.trim()){onRename?.(draft.trim());setRenameOpen(false)}}}/><div className="sidebar-rename-actions"><button onClick={()=>setRenameOpen(false)}>取消</button><button className="primary" onClick={()=>{if(draft.trim())onRename?.(draft.trim());setRenameOpen(false)}}>保存</button></div></DialogContent></Dialog>
  </span>
}
