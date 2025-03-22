import { Campaign } from '@/__generated__/graphql'
import CampaignBanner from '@/components/CampaignBanner'
import React from 'react'
import mapper from './mapper'

function CampaignBannerFragment(props: Campaign) {

  const data = mapper(props);
  return (
    <div><CampaignBanner {...data} /></div>
  )
}

export default CampaignBannerFragment