import './index.scss';
import WindowsLogo from '../../assets/windows-icon.webp';

export function FooterBar() {
    const hourNow = new Date().getHours();
    const minutesNow = new Date().getMinutes();
    return (
        <>
        <div>
            
        </div>
        <footer className='footerWindowsClassName'>
                <div>
                    <button className='buttonWindows' onClick={() => window.open('/google.com')}>
                        <img src={WindowsLogo} alt="Menu Iniciar" /> Iniciar
                    </button>
                </div>
                <div className='endBarFooter'>
                    {hourNow}:{minutesNow}
                </div>
            </footer></>
    )
}