"use client"
import { useState, FormEvent, ChangeEvent } from "react";


    interface FormData {
        name: string
        email: string
        message: string
    }

    interface FormErrors {
        name?: string
        email?: string
        message?: string
    }

    type SubmitStatus = 'success' | 'error' | null

    export default function Footer() {
        const currentYear = new Date().getFullYear()

        // Form state
        const [formData, setFormData] = useState<FormData>({
            name: '',
            email: '',
            message: ''
        })

        const [errors, setErrors] = useState<FormErrors>({})
        const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
        const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)

        // Handle input changes
        const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))

            // Clear error when user starts typing
            if (errors[name as keyof FormErrors]) {
                setErrors(prev => ({
                    ...prev,
                    [name]: ''
                }))
            }
        }

        // Validation function
        const validateForm = (): FormErrors => {
            const newErrors: FormErrors = {}

            // Name validation
            if (!formData.name.trim()) {
                newErrors.name = 'Le nom est requis'
            } else if (formData.name.trim().length < 2) {
                newErrors.name = 'Le nom doit contenir au moins 2 caractères'
            }

            // Email validation
            if (!formData.email.trim()) {
                newErrors.email = 'L\'email est requis'
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = 'Veuillez entrer un email valide'
            }

            // Message validation
            if (!formData.message.trim()) {
                newErrors.message = 'Le message est requis'
            } else if (formData.message.trim().length < 10) {
                newErrors.message = 'Le message doit contenir au moins 10 caractères'
            }

            return newErrors
        }

        // Handle form submission
        const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()

            // Validate form
            const newErrors = validateForm()
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors)
                return
            }

            // Clear previous errors and set submitting state
            setErrors({})
            setIsSubmitting(true)
            setSubmitStatus(null)

            try {
                // Simulate API call - replace with your actual endpoint
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })

                if (response.ok) {
                    // Success
                    setSubmitStatus('success')
                    setFormData({ name: '', email: '', message: '' })

                    // Reset success message after 5 seconds
                    setTimeout(() => {
                        setSubmitStatus(null)
                    }, 5000)
                } else {
                    throw new Error('Failed to send message')
                }
            } catch (error) {
                console.error('Error submitting form:', error)
                setSubmitStatus('error')

                // Reset error message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus(null)
                }, 5000)
            } finally {
                setIsSubmitting(false)
            }
        }

        // Reset form
        const handleReset = () => {
            setFormData({ name: '', email: '', message: '' })
            setErrors({})
            setSubmitStatus(null)
        }


        return (
            <footer id="contact" className="bg-gradient-to-br from-gray-900 to-purple-900 text-white">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">₵</span>
                                </div>
                                <span className="text-2xl font-bold gradient-text">Cash Register</span>
                            </div>
                            <p className="text-gray-300 mb-6 max-w-md">
                                Système de point de vente moderne qui transforme votre entreprise.
                                Gérez les ventes, les stocks et les analyses en un seul endroit.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 gradient-text">Liens Rapides</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                                        Caractéristiques
                                    </a>
                                </li>
                                <li>
                                    <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                                        Tarifs
                                    </a>
                                </li>
                                <li>
                                    <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                                        Témoignages
                                    </a>
                                </li>
                                <li>
                                    <a href="#download" className="text-gray-300 hover:text-white transition-colors">
                                        Télécharger
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 gradient-text">Contactez-nous</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300">contactmoez93@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300">+216 52 984 142</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300">Tunis, Tunisia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                {/* Contact Form Section */}
                <div className="border-t border-gray-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 gradient-text">Restons en Contact</h3>
                                <p className="text-gray-300 mb-6">
                                    Vous avez des questions ? Notre équipe est là pour vous aider.
                                    Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.
                                </p>
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Réponse sous 24 heures</span>
                                </div>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="mt-4 p-3 bg-green-500/20 border border-green-500 rounded-lg">
                                        <p className="text-green-400 flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Message envoyé avec succès ! Nous vous répondrons bientôt.
                                        </p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg">
                                        <p className="text-red-400 flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            Une erreur est survenue. Veuillez réessayer.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                                Votre Nom *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-2 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${errors.name ? 'border-red-500' : 'border-gray-600'
                                                    }`}
                                                placeholder="Votre nom complet"
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                                Votre Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-2 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${errors.email ? 'border-red-500' : 'border-gray-600'
                                                    }`}
                                                placeholder="email@exemple.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${errors.message ? 'border-red-500' : 'border-gray-600'
                                                }`}
                                            placeholder="Votre message..."
                                        ></textarea>
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                                        )}
                                    </div>

                                    <div className="flex space-x-3">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`flex-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold transition-all ${isSubmitting
                                                ? 'opacity-50 cursor-not-allowed'
                                                : 'hover:shadow-lg hover:scale-105 glow'
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Envoi en cours...
                                                </span>
                                            ) : (
                                                'Envoyer le Message'
                                            )}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-white/5 transition-colors"
                                        >
                                            Effacer
                                        </button>
                                    </div>

                                    <p className="text-xs text-gray-400 text-center">
                                        * Champs obligatoires
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-gray-400 text-sm mb-4 md:mb-0">
                                © {currentYear} Cash Register POS. Tous droits réservés.
                            </div>
                            <div className="flex space-x-6 text-sm">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Politique de confidentialité
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Conditions d`&apos;`utilisation
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }