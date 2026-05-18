import { ContactForm } from '@/components/form/contact'
import React from 'react'

export const HomeContact = () => {
    return (
        <div className='bg-neutral-50'>
            <section className="bg-neutral-200/50 py-20 text-neutral-950 px-4">
                <div className="container grid md:grid-cols-3 gap-4 mx-auto max-w-6xl relative">

                    <div className="relative">
                        <div className="flex sticky top-20 items-center gap-2">
                            <div className="w-4 h-4 bg-primary" />
                            <h2 className="uppercase text-neutral-950/50">Contacto</h2>
                        </div>
                    </div>

                    <div className='col-span-2'>
                        <ContactForm />
                    </div>
                
                </div>
            </section>
        </div>
    )
}
