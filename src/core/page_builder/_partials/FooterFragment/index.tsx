import { Footer } from '@/__generated__/graphql'
import FooterUI from '@/components/Footer'
import React from 'react'
import mapper from './mapper';

function FooterFragment(props:Footer) {

    const data = mapper(props);
  return (
    <div>
        <FooterUI {...data} />
    </div>
  )
}

export default FooterFragment