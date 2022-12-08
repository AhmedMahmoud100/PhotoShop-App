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
                    <img src="https://lh3.googleusercontent.com/jnwTaSfaFc5bemeVeanRau0z21iu7lswqW-XCKz86iHWfvmnqMGuS4XsYr4Nc6koJ1JfxnJXVQoYI87I2iMVMi5QF8KdEqyPYCOKETJ0IJne95bFFi0GWKcQCynhecL3m35RA_q3TlYXDVgX-PlJH2wuhI4vduVBJfz91tA7_lw5hZZ1g9qhsjr_xSBh24VOwQAbr0_hUtYxV3FTkr2Jm8lp3aE8oDRZN_6Y5rAXSrJm_8zfMy4KWhsQlrYUZaN7UW3VmorefOu5YMN3fFG7rF_TpREOJgzvr_I-jeWlpy5tUBWoU-rpQMXUnTz5nEFiXdDQQ9w8n3byl9OHk_cWJ4BJdODYJ2Ygu7NxIvV_jJgkwmpgqQiLNCDGI_PdIybRY1XBAP-lUmYOKk0B9CNqsHmLv7pWe7HTbTk64Ez5uHBMcDZzYSrbOmd3Jr-LZhLIGNsUTaPQsu6x6DI2ZaH0swqHSoIb2Wl-T2SUDBW_CDK5T-kX-tAr57uJrip0zGm38hs9897mjpT4sCwKJfTYJ8mNsn9QsLNDPsJb46Rkf6rmSb_g8TgBi_nmsaLq8mj9qNT8lYDvHy2vAQ3aSa4-BDL3nWdcCiwS98CXUHxYdyxLzO0adbKq6ROncnvXgY_L0FpKeZpRDDU7N79sx-90JIxxqJFyb5s4izVB_aKu-QnqHWK--y1ukSB-H4l8zOtLReXYLIiyVOyDqzBAm4FaCLGqP68vM6Tah5yQkdJviH8R8S58-_K7v0EWfR7U1JbS1fVl-0S5clY0cAru1laenP5PJUFJ0PMRbf6dY_4I8cOark7NHvY21RFNewd0xcAnXVJUbdEAhPqeHkfMgGmAkL0GxQ9St29HxDIr_aXHlfGGKA5IHptXGzxt0EkvKa4E6DxUs4ati_BmV1SwwK5pFryh4ClwvarVwQkvY3zMCmkwwyE4=s220-no?authuser=0" alt="" />
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
