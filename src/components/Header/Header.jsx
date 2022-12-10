import './Header.scss'
import { Link } from 'react-router-dom'
import HelpMenu from '../HelpMenu/HelpMenu';
import { useState } from 'react';

export default function Header() {
    const [menu, setMenu] = useState(false)
    
    return (
        <header className='main-header'>
            <Link to='/'>
                <div className='logo'>
                    <img src="/logo.png" alt=''/>
                    <h2>PhotoShop</h2>
                </div>
            </Link>

            <div className='right'>
                <Link to='/examples'>Examples</Link>
                <button onClick={() => { setMenu(!menu) }}>Help</button>
                <Link to={'./edit'} state={{ test: true }} className='test'>Test Image</Link>
            </div>
            {menu && <HelpMenu visibility={setMenu} />}
        </header>
    )
}
