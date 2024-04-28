import { BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage, Breadcrumb } from '@/components/ui/breadcrumb'
import React from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
import { clientData } from './data-example'

function Clients() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Clientes</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Clientes</h2>

      <DataTable columns={columns} data={clientData} />
    </section>
  )
}

export default Clients
