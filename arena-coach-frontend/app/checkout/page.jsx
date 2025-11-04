'use client'
import { useSearchParams } from 'next/navigation'
import CheckoutForm from '../../components/CheckoutForm'

export default function CheckoutPage(){
  const params = useSearchParams()
  const classId = params.get('classId')
  return (
    <div className="max-w-md mx-auto py-12">
      <h2 className="text-xl font-bold">Checkout</h2>
      <CheckoutForm classId={classId} />
    </div>
  )
}
