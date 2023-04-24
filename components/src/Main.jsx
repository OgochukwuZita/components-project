import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Buttons from './Buttons'
import Languages from './Languages'
import LanguageText from './LanguageText'
import SearchIcons from './SearchIcons'
import './Styles/main.css'
export default function Main() {
  return (
    <div>
        <Logo/>
        <Search/>
        <SearchIcons/>
        <div>
        <div>
        <Buttons title={<button>Google Search</button>}/>
        </div>
        <div>
        <Buttons title ={<button>I'm Feeling Lucky</button>}/>
        </div>
        </div>
        <LanguageText title={"Google offered in:"}/>
        <Languages title={<a href='https://www.google.com/setprefs?sig=0_-aC735a0xB55uBp2x1klqrwHWJQ%3D&hl=ha&source=homepage&sa=X&ved=0ahUKEwitkPeJm7_-AhWjUKQEHVy7A9wQ2ZgBCBQ'>Hausa</a>}/>
        <Languages title={<a href='https://www.google.com/setprefs?sig=0_-aC735a0xB55uBp2x1klqrwHWJQ%3D&hl=ig&source=homepage&sa=X&ved=0ahUKEwitkPeJm7_-AhWjUKQEHVy7A9wQ2ZgBCBU'>Igbo</a>}/>
        <Languages title={<a href='https://www.google.com/setprefs?sig=0_-aC735a0xB55uBp2x1klqrwHWJQ%3D&hl=yo&source=homepage&sa=X&ved=0ahUKEwitkPeJm7_-AhWjUKQEHVy7A9wQ2ZgBCBY'> Èdè Yorùbá</a>}/>
        <Languages title={<a href='https://www.google.com/setprefs?sig=0_-aC735a0xB55uBp2x1klqrwHWJQ%3D&hl=pcm&source=homepage&sa=X&ved=0ahUKEwitkPeJm7_-AhWjUKQEHVy7A9wQ2ZgBCBc'>Nigerian Pidgin</a>}/>
    </div>
  )
}
