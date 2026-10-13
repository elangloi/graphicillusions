import { CheckIcon } from 'lucide-react'
import { cn } from 'cn'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export type Responsibility = { task: string; you: string | null }

/** "Who does what" table: the client's small part versus everything we handle. */
export function ResponsibilityTable({ rows, companyName }: { rows: Responsibility[]; companyName: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card">
      <Table className="min-w-[620px] text-base">
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            {['Task', 'You', companyName].map((label, i) => (
              <TableHead
                key={label}
                scope="col"
                className={cn('h-auto px-5 py-4 text-[13px] font-semibold tracking-[0.1em] text-sky uppercase', i > 0 && 'text-center')}
              >
                {label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.task} className="border-border hover:bg-accent/40">
              <TableCell className="px-5 py-4 whitespace-normal text-[#d3e0ee]">{row.task}</TableCell>
              <TableCell className="px-5 py-4 text-center text-[#d3e0ee]">
                {row.you ?? <span aria-label="Nothing">—</span>}
              </TableCell>
              <TableCell className="px-5 py-4 text-center">
                <CheckIcon className="inline size-5 text-brand-blue" strokeWidth={2.6} role="img" aria-label="Yes" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
