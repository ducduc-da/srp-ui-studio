import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'SRP 趋势洞察 · 研究伙伴',description:'从业务问题到图文洞察的可交互产品演示。所有研究数据为模拟。'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}
