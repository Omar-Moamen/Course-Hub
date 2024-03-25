import {Helmet} from "react-helmet-async"

function SEO({title, description, name, type})
{
   return (
      <Helmet>
         <title>{title}</title>
         <meta name="description" content={description} />
         {/* Facebook tags */}
         <meta property="og:type" content={type} />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
         {/* End Facebook tags */}
         {/* Twitter tags */}
         <meta property="twitter:creator" content={name} />
         <meta property="twitter:card" content={type} />
         <meta property="twitter:title" content={title} />
         <meta property="twitter:description" content={description} />
         {/* End Twitter tags */}
      </Helmet>
   )
}

export default SEO
