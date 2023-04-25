import React from 'react'
import LanguageText from './LanguageText'
import Nav from './Nav'
import CarbonImage from './CarbonImage'
import './Styles/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
    <LanguageText title='Nigeria'/>
    <hr/>
    <div className='footerLinks'>
    <Nav title={<a href='https://about.google/?utm_source=google-NG&utm_medium=referral&utm_campaign=hp-footer&fg=1'>About</a>}/>
    <Nav title={<a href='https://www.google.com/intl/en_ng/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'>Advertising</a>}/>
    <Nav title={<a href='https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1'>Business</a>}/>
    <Nav title={<a href='https://google.com/search/howsearchworks/?fg=1'>How Search works</a>}/>
    <div className='img'>
      <div>
    <CarbonImage/>
    </div>
    <div>
    <Nav title={<a href='https://sustainability.google/carbon-free/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content='>Carbon neutral since 2007</a>}/>
    </div>
    </div>
    <Nav title={<a href='https://policies.google.com/privacy?hl=en-NG&fg=1'>Privacy</a>}/>
    <Nav title={<a href='https://policies.google.com/terms?hl=en-NG&fg=1'>Terms</a>}/>
    <Nav title={<a href='https://sustainability.google/carbon-free/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content='>Settings</a>}/>
    </div>

    </div>
  )
}
