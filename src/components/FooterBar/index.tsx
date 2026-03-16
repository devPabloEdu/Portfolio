import './index.scss';
import WindowsLogo from '../../assets/windows-icon.webp';

export function FooterBar() {
    const hourNow = new Date().getHours();
    const minutesNow = new Date().getMinutes();
    return (
        <footer className='footerWindowsClassName'>
            <div>
                <button className='buttonWindows'>
                    <img src={WindowsLogo} alt="Menu Iniciar" /> Iniciar
                </button>
            </div>
            <div className='endBarFooter'>
                {hourNow}:{minutesNow}
            </div>
        </footer>
    )
}