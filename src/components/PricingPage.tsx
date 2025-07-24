import React from 'react'
import { Check } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  period: string
  messages: string
  features: string[]
  popular?: boolean
  buttonText: string
  buttonStyle: string
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    messages: '10 messages/month',
    features: [
      '5 daily messages',
      'Public projects',
      'Community support',
      'Basic AI models'
    ],
    buttonText: 'Get Started',
    buttonStyle: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
  },
  {
    name: 'Starter',
    price: '$20',
    period: '/month',
    messages: '100 messages/month',
    features: [
      'All Free features',
      'Private projects',
      'Custom domains',
      'Download code',
      'Remove Blink badge'
    ],
    buttonText: 'Start Free Trial',
    buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700'
  },
  {
    name: 'Pro',
    price: '$50',
    period: '/month',
    messages: '250 messages/month',
    features: [
      'All Starter features',
      'Advanced AI models',
      'Priority support',
      'Team collaboration',
      'Advanced analytics'
    ],
    popular: true,
    buttonText: 'Start Free Trial',
    buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700'
  },
  {
    name: 'Max',
    price: '$100',
    period: '/month',
    messages: '500 messages/month',
    features: [
      'All Pro features',
      'Early access to beta features',
      'Dedicated support',
      'Custom integrations',
      'Enterprise security'
    ],
    buttonText: 'Contact Sales',
    buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800'
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core AI-powered development tools.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border ${
                tier.popular
                  ? 'border-blue-500 shadow-lg scale-105'
                  : 'border-gray-200'
              } bg-white p-8 shadow-sm`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  <span className="ml-1 text-xl text-gray-500">
                    {tier.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{tier.messages}</p>
              </div>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${tier.buttonStyle}`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What counts as a message?
              </h3>
              <p className="text-gray-600">
                Each interaction with our AI counts as one message. This includes prompts, code generation requests, and follow-up questions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change plans anytime?
              </h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens if I exceed my message limit?
              </h3>
              <p className="text-gray-600">
                Your account will be temporarily limited until the next billing cycle. You can upgrade your plan to continue using the service immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of developers building with AI
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Building Today
          </button>
        </div>
      </div>
    </div>
  )
}