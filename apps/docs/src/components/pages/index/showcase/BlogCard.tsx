'use client'
import { Card } from '@creation-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const date = new Date('2021-02-27')

export const BlogCard = () => {
  return (
    <Card className='!w-sm flex flex-col gap-2 flex-grow-0 h-full p-4'>
      <Image
        src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDh8fGxhcHRvcHxlbnwwfHx8fDE3MzM5NDY5OTh8MA&ixlib=rb-4.0.3&q=80&w=1200'
        alt='Blog Card'
        width={300}
        height={300}
        className='rounded-sm w-auto h-2/3 object-cover'
      />
      <div className='text-sm text-text-secondary flex justify-between '>
        <span>{date.toLocaleDateString()}</span>
        <span>4 min read</span>
      </div>
      <Link href='https://pl.inventorium.io/dlaczego-robisz-to-co-robisz/' target='_blank'>
        <h3 className='text-lg font-bold'>Dlaczego robisz to co robisz</h3>
      </Link>
      <p className='text-ellipsis text-sm text-text-primary leading-relaxed line-clamp-4 text-justify'>
        "Co najbardziej lubisz w programowaniu?" Tego pytania o dziwno nie zadał
        mi żaden rekruter, ale moja siostra, kilka godzin po tym, jak wcześniej
        wysłałem jej zdjęcie mojego biurka. Było na nim widać komputer z
        otwartym edytorem kodu
      </p>
    </Card>
  )
}
