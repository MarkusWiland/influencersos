'use client'
import { CheckCircle, XCircle, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button' // Antag att du har en Button-komponent
import { Card, CardContent } from '@/components/ui/card' // För en snygg fakturakortlayout

// MOCKDATA – detta ska ersättas med fakturadata från API
const invoices = [
  {
    id: 1,
    date: '2023-04-05',
    amount: '500 kr',
    status: 'Betald',
    type: 'historical',
  },
  {
    id: 2,
    date: '2023-03-28',
    amount: '750 kr',
    status: 'Ej betald',
    type: 'historical',
  },
  {
    id: 3,
    date: '2023-05-12',
    amount: '1200 kr',
    status: 'Ej betald',
    type: 'upcoming',
  },
]

export default function InvoicesPage() {
  // Hantera ändring av status
  const handleStatusChange = (id: number) => {
    const updatedInvoices = invoices.map((invoice) => {
      if (invoice.id === id) {
        invoice.status = invoice.status === 'Betald' ? 'Ej betald' : 'Betald'
      }
      return invoice
    })
    console.log(updatedInvoices) // Spara tillbaka till server eller API
  }

  return (
    <div className="min-h-screen p-6 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-8">Fakturor</h1>

      {/* Knappar */}
      <div className="mb-6 flex gap-4">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
          Skapa Faktura
        </Button>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
          AI Skapa Faktura
        </Button>
      </div>

      {/* Fakturatabell i Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {invoices.map((invoice) => (
          <Card
            key={invoice.id}
            className="transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden bg-muted/40"
          >
            <CardContent className="py-6 px-4 flex flex-col items-center space-y-4">
              {/* Ikon för faktura */}
              <FileText className="w-16 h-16 text-primary" />

              {/* Fakturainformation */}
              <div className="text-center">
                <p className="text-xl font-semibold">{`Faktura #${invoice.id}`}</p>
                <p className="text-sm text-muted-foreground">{`Datum: ${invoice.date}`}</p>
                <p className="text-lg font-bold mt-2">{invoice.amount}</p>
              </div>

              {/* Statusikoner */}
              <div
                className={`mt-2 inline-block py-1 px-4 rounded-full text-xs font-medium ${
                  invoice.status === 'Betald'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                }`}
              >
                {invoice.status === 'Betald' ? (
                  <CheckCircle className="w-4 h-4 inline mr-2" />
                ) : (
                  <XCircle className="w-4 h-4 inline mr-2" />
                )}
                {invoice.status}
              </div>

              {/* Knapp för att ändra status */}
              <Button
                onClick={() => handleStatusChange(invoice.id)}
                className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {invoice.status === 'Betald'
                  ? 'Markera som Ej Betald'
                  : 'Markera som Betald'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
