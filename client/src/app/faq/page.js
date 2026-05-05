'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle, AlertCircle, Truck, RotateCcw } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqCategories = [
    {
      title: 'General',
      icon: <MessageCircle size={24} />,
      items: [
        {
          q: 'What does Spark Innovations sell?',
          a: 'Spark Innovations is an authorized distributor of Kutchina kitchen appliances including chimneys, hobs, cooktops, and water purifiers. We offer authentic products with full warranty support.'
        },
        {
          q: 'Where are you located?',
          a: 'We are based in Kolkata and serve customers across India with fast and reliable delivery.'
        },
        {
          q: 'Do you ship across India?',
          a: 'Yes, we offer nationwide shipping. Delivery times vary based on location but are typically 3-7 business days.'
        }
      ]
    },
    {
      title: 'Shipping & Delivery',
      icon: <Truck size={24} />,
      items: [
        {
          q: 'What are the shipping charges?',
          a: 'Free shipping is available on orders above ₹5000. For orders below that, shipping charges are calculated based on your location.'
        },
        {
          q: 'How do I track my order?',
          a: 'Once your order ships, you\'ll receive a tracking number via email. You can use this to track your package in real-time.'
        },
        {
          q: 'What if my package is damaged?',
          a: 'We pack all items carefully with insurance. If your product arrives damaged, please contact us immediately with photos and we\'ll arrange a replacement.'
        }
      ]
    },
    {
      title: 'Returns & Refunds',
      icon: <RotateCcw size={24} />,
      items: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 30-day return policy on unused products in original packaging. Please contact our support team to initiate the return process.'
        },
        {
          q: 'How long does a refund take?',
          a: 'Refunds are processed within 7-10 business days after we receive and inspect the returned item.'
        },
        {
          q: 'Can I return a used product?',
          a: 'Used products cannot be returned, but if there\'s a manufacturing defect, it will be covered under warranty.'
        }
      ]
    },
    {
      title: 'Product & Warranty',
      icon: <AlertCircle size={24} />,
      items: [
        {
          q: 'Are all products authentic?',
          a: 'Yes, 100% authentic. We are an authorized distributor of Kutchina. All products come with manufacturer warranty.'
        },
        {
          q: 'What warranty is provided?',
          a: 'Products come with Kutchina manufacturer warranty. Typically 1-3 years depending on product. Warranty card will be provided with your order.'
        },
        {
          q: 'Do you provide installation service?',
          a: 'We offer installation guidance and can recommend certified technicians in your area. Please contact us for details.'
        },
        {
          q: 'Where can I find product specifications?',
          a: 'Detailed specifications are available on each product page. You can also contact us for technical assistance.'
        }
      ]
    },
    {
      title: 'Account & Orders',
      icon: <MessageCircle size={24} />,
      items: [
        {
          q: 'How do I create an account?',
          a: 'Click on "Sign Up" on the top right of the website. Fill in your details and verify your email to get started.'
        },
        {
          q: 'Can I modify my order?',
          a: 'Orders can only be modified within 2 hours of placement. Please contact support immediately if you need changes.'
        },
        {
          q: 'How do I contact customer support?',
          a: 'You can reach us via email, phone, or WhatsApp. Check the Contact page for all communication channels.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-brand-blue uppercase tracking-tight mb-3">Frequently Asked Questions</h1>
          <p className="text-slate-600 text-lg">Find answers to common questions about our products and services</p>
        </div>

        {}
        <div className="space-y-8">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {}
              <div className="bg-linear-to-r from-brand to-brand-dark p-6 text-white flex items-center gap-4">
                <div className="opacity-80">{category.icon}</div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              {}
              <div className="divide-y divide-slate-200">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-6 cursor-pointer hover:bg-slate-50 transition"
                    onClick={() => setOpenIndex(openIndex === `${catIndex}-${itemIndex}` ? null : `${catIndex}-${itemIndex}`)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-bold text-slate-900 flex-1 text-lg">
                        {item.q}
                      </h3>
                      <ChevronDown
                        size={24}
                        className={`text-brand shrink-0 transition-transform ${
                          openIndex === `${catIndex}-${itemIndex}` ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {}
                    {openIndex === `${catIndex}-${itemIndex}` && (
                      <div className="mt-4 pt-4 border-t border-slate-200 text-slate-600 leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="mt-12 bg-linear-to-r from-brand to-brand-dark rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="mb-6 opacity-90">Our support team is here to help. Contact us anytime!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="px-6 py-3 bg-white text-brand rounded-lg font-bold hover:bg-slate-100 transition inline-block">
              Call Us
            </a>
            <a href="https://wa.me/919876543210" className="px-6 py-3 bg-white/20 text-white rounded-lg font-bold border-2 border-white hover:bg-white/30 transition inline-block">
              WhatsApp
            </a>
            <a href="mailto:support@sparkinnovations.in" className="px-6 py-3 bg-white/20 text-white rounded-lg font-bold border-2 border-white hover:bg-white/30 transition inline-block">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}




