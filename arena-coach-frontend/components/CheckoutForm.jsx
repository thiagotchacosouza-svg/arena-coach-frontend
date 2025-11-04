'use client'
import { useState } from 'react'
import api from '../lib/api'
import { loadStripe } from '@stripe/stripe-js'

export default function CheckoutForm({ classId }){
  const [loading, setLoading] = useState(false)
  const [provider, setProvider] = useState('pagarme')

  async function handleCheckout(e){
    e.preventDefault(); setLoading(true)
    const bookingResp = await api.post('/bookings', { classId, scheduledAt: new Date().toISOString() })
    const booking = bookingResp.data.booking || bookingResp.data

    const paymentResp = await api.post('/payments/intent', { bookingId: booking.id, provider })

    if (provider === 'stripe'){
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
      const clientSecret = paymentResp.data.clientSecret
      alert('Stripe clientSecret gerado — confirmar com Stripe Elements (implementar)')
    }

    if (provider === 'pagarme'){
      alert('Pagar.me charge criada — finalize pagamento no sandbox (implementar frontend)')
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleCheckout} className="bg-white p-6 rounded shadow">
      <label className="block mb-2">Gateway</label>
      <select value={provider} onChange={e=>setProvider(e.target.value)} className="w-full p-2 border rounded mb-4">
        <option value="pagarme">Pagar.me (BRL)</option>
        <option value="stripe">Stripe (internacional)</option>
      </select>

      <button className="w-full bg-sun py-3 rounded" disabled={loading}>{loading ? 'Processando...' : 'Confirmar pagamento'}</button>
    </form>
  )
}
