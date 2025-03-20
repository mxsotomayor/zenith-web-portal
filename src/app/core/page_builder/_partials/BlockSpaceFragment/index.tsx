import BlockSpace from '@/components/BlockSpace'
import React from 'react'

function BlockSpaceFragment({size}:{size: "sm" | "md" | "lg"}) {
  return (
    <div><BlockSpace size={size}/></div>
  )
}

export default BlockSpaceFragment