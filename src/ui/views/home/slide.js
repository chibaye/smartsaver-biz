import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import {autoPlay} from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const styles = {
    slide: {
        minHeight: 660,
        color: '#fff'
    }
}

const BannerSlide = () => <AutoPlaySwipeableViews>
    <div style={styles.slide}>
        <img src="/images/teb-web1v2.webp" alt="loyalty" title="loyalty"/>
        <div className="caption superimpose">
            <span>
                <h1>Loyalty, Rewards and Incentives<br/>your customers will use.</h1>
                <h2>Since 2015, our clients' customers have saved over AED310 million</h2>
                <p><a href="/get-in-touch" className="btn btn-default" rel="noopener" tabIndex="-1">Learn more</a></p>
            </span>
        </div>
    </div>
    <div style={styles.slide}>
        <img src="/images/TEB2.webp" alt="Engage customers" title="Engage customers"/>
        <div className="caption superimpose">
            <span>
                <h1>Engage customers,<br/>keep them coming back.</h1>
                <h2><span>2,479,496</span>&nbsp;redemptions made in 2017-2018</h2>
                <p><a href="/get-in-touch" className="btn btn-default">Get Started</a></p>
            </span>
        </div>
    </div>
    <div style={styles.slide}>
        <img src="/images/TEB3.webp" alt="ENTERTAINER business provides" title="ENTERTAINER business provides"/>
        <div className="caption superimpose">
            <span>
                <h1>ENTERTAINER business provides loyalty and rewards solutions<br/>to some of the world's leading brands.</h1>
                <h2><span>Over 250</span> Corporate Partnerships</h2>
                <p><a href="/get-in-touch" className="btn btn-default">Get Started</a></p>
            </span>
        </div>
    </div>
</AutoPlaySwipeableViews>

export default BannerSlide