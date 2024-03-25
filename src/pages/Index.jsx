import withGuard from '../util/withGuard'
import Landing from './Landing/Landing'

function Index()
{

   return (
      <>
         <Landing />
      </>
   )
}

export default withGuard(Index);
