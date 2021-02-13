import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import {autoPlay} from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const ClientSlide = () => <AutoPlaySwipeableViews>
    <div className='slider'>
        <img src="/images/batelco_r.webp" alt="batelco" title="batelco"/>
        <img src="/images/bp.webp" alt="bp" title="bp"/>
        <img src="/images/carrefour.png" alt="carrefour" title="carrefour"/>
        <img src="/images/dhl.webp" alt="dhl" title="dhl"/>
        <img src="/images/du.png" alt="du" title="du"/>
        <img src="/images/emirates.png" alt="emirates" title="emirates"/>
        <img src="/images/enbd.webp" alt="emirates nbd" title="emirates nbd"/>
    </div>
    <div className='slider'>
        <img src="/images/gems.webp" alt="gems education" title="gems education"/>
        <img src="/images/gsk.webp" alt="gsk" title="gsk"/>
        <img src="/images/hsbc.webp" alt="hsbc" title="hsbc"/>
        <img src="/images/kellogs.webp" alt="kellogs" title="kellogs"/>
        <img src="/images/samsung.png" alt="samsung" title="samsung"/>
        <img src="/images/travelex.webp" alt="travelex" title="travelex"/>
        <img src="/images/wego.png" alt="wego" title="wego"/>
    </div>
</AutoPlaySwipeableViews>

export default ClientSlide