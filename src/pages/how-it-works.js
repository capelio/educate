import React from 'react'

import kidsImage from 'assets/images/smiling-kids.jpg'

export default React.createClass({
  render () {
    return (
      <div className='how-it-works-page'>
        <h3>How It Works</h3>

        <figure className='media-outlined pull-right'>
          <img src={kidsImage} alt='Smiling Nepali children'/>
          <figcaption>
            Credit <a href='https://flic.kr/p/p1dbJL' target='_blank'>Matt Zimmerman</a> (<a href='https://creativecommons.org/licenses/by/2.0/' target='_blank'>CC BY 2.0</a>)
          </figcaption>
        </figure>

        <p>To the developed world, the power of education is well understood. In Nepal, however, this is a relatively new idea.</p>

        <p>In Nepal, the promise of a free public education does not exist. A child's parents must supply both the child's yearly tuition along with uniforms and school supplies. As Nepal is one of the poorest countries in the world, this economic barrier prevents many Nepali children from ever attaining an education.</p>

        <p>After the earthquakes, the situation has only gotten worse. Families who lost one or both parents also lost the financial means to pay for school. Those who lost their homes also lost their belongings, including the uniforms and school supplies necessary to attend school. Many children previously attending school have been forced to drop out. The barrier for those hoping to begin attending school has risen even higher.</p>

        <p>Our mission at Lift Up Nepal is to connect grassroots Nepali aid organizers with donors from around the world. Over 97% of every donated dollar goes directly to tuition, uniforms, and school supplies.</p>
      </div>
    )
  }
})
