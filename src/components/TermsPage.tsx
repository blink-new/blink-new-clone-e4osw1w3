import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'

interface TermsPageProps {
  onBack?: () => void
}

export default function TermsPage({ onBack }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {onBack && (
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-8 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        )}
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 24, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using Blink ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Blink is an AI-powered platform that enables users to create web applications, websites, and digital projects through 
              natural language prompts. The service includes project creation, hosting, collaboration tools, and various integrations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features of the Service, you must register for an account. You are responsible for maintaining 
              the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for keeping your account information up to date</li>
              <li>You must not share your account credentials with others</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>Submit false or misleading information</li>
              <li>Upload or transmit viruses or any other type of malicious code</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Content and Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of any content you create using the Service. However, by using the Service, you grant us 
              a limited license to host, store, and display your content as necessary to provide the Service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property 
              of Blink and its licensors. The Service is protected by copyright, trademark, and other laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibent text-gray-900 mb-4">6. Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
              to understand our practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Subscription and Billing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some features of the Service are available through paid subscriptions. By purchasing a subscription, you agree to pay 
              the applicable fees and charges. Subscriptions automatically renew unless cancelled.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>We reserve the right to change our pricing at any time</li>
              <li>You can cancel your subscription at any time through your account settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
              under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, 
              this Company excludes all representations, warranties, conditions and terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In no event shall Blink, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
              for any indirect, incidental, special, consequential, or punitive damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">Email: support@blink.new</p>
              <p className="text-gray-700">Discord: https://discord.gg/2RjY7wP4a8</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}