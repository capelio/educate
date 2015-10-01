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
            Credit Matt Zimmerman (CC BY 2.0)
          </figcaption>
        </figure>

        <p>Education is power.  In Nepal we know this, but many of our children are prevented from going to school because they can’t afford it. In Nepal, public education is not free. The government charges tuition, a fee for the required school uniforms, a textbook fee, etc. in exchange for attendance. Many children’s families are not able to afford this luxury. Unfortunately, this situation has only gotten worse after the earthquake because thousands of children lost one or both of their parents, significantly reducing their family’s income, making attending school even more of an impossibility.</p>

        <p>Our organization, “Lift Up Nepal”, was created to help tackle this problem. We certainly cannot replace those children’s parents who have died, but at least we can help fulfill their hope that their children continue attending school. To this end, we are asking for your support in giving these children a chance at a more hopeful and promising future.</p>

        <p>Please note, most of the students we support attend public schools, but on the rare occasion when an orphaned child has no one left to live with, we will pay to enroll them in a private boarding school so they can have a home and an education.</p>
      </div>
    )
  }
})
