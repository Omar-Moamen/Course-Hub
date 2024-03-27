import useUserActivation from '../hooks/use-user-activation';
import Landing from './Landing/Landing'

function Index()
{
   const {role, activated} = useUserActivation();

   return (
      <>
         <Landing role={role} activated={activated} />
      </>
   )
}

export default Index;
