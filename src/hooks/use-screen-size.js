import {useEffect, useState} from "react";

export default function useScreenSize()
{
   const [screenSize, setScreenSize] = useState(window.innerWidth);
   useEffect(() =>
   {
      const resizeHandler = () => setScreenSize(window.innerWidth);

      window.addEventListener('resize', resizeHandler);

      return () => window.removeEventListener('resize', resizeHandler);
   }, [screenSize]);

   return [screenSize, setScreenSize];
}