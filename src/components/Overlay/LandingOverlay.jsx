import './LandingOverlay.css'

function LandingOverlay({children})
{
   return (
      <div className='landing-overlay'>
         {children}
      </div>
   )
}

export default LandingOverlay;
