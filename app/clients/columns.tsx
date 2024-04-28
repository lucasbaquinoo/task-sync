"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Client = {
  id: string
  name: string
  status: "pending" | "in-progress" | "paid" | "delayed"
  projects: number
}

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: "Cliente",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell({ row }) {
      const status = row.getValue("status")

      switch (status) {
        case "in-progress":
          return <Badge variant="outline">Em progresso</Badge>

        case "paid":
          return <Badge>Pago</Badge>

        case "delayed":
          return <Badge variant="destructive">Atrasado</Badge>

        default:
          return <Badge variant="secondary">Pendente</Badge>
      }
    },
  },
  {
    accessorKey: "projects",
    header: "Qtd. Projetos",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="size-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
