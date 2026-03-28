'use client'

import Link from 'next/link'
import ClientUpgradeCard from '../../components/ClientUpgradeCard'
import { clients } from '../../data/olympia'

const client = clients.find((c) => c.id === 'besu')!

export default function BesuUpgradePage() {
  return (
    <main className="min-h-screen px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Link
            href="/olympia/clients"
            className="text-sm text-[#00ffae] transition hover:text-[#00ffae]/80"
          >
            ← All Clients
          </Link>
        </div>
        <ClientUpgradeCard client={client} detail />
      </div>
    </main>
  )
}
