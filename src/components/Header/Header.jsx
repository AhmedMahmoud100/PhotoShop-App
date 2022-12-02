import './Header.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Header() {
    return (
        <header className='main-header'>
            <div className='logo'>
                <img src="/logo-1.png" alt="" />
                <h2>PhotoShop</h2>
            </div>
            <div className='right'>
                <div>
                    <span>Examples </span>

                </div>

                <div>
                    <span>Help</span>

                </div>

                <span className='test'>Test Image</span>
            </div>
        </header>
    )
}
