import Loading from '../components/Loading/Loading'
import Landing from './Landing/Landing'

function Index()
{
   return (
      <>
         <Loading>
            {(_, loader) => (loader ? loader : <Landing />)}
         </Loading>
      </>
   )
}

export default Index
