import Loading from '../components/Loading/Loading';
import Landing from './Landing/Landing'

function Index()
{
   return (
      <>
         <Loading>
            {(disable, loader) => {return disable ? loader : <Landing />}}
         </Loading>
      </>
   )
}

export default Index
