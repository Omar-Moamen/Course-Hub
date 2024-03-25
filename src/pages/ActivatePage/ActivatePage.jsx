
function ActivatePage()
{

   return (
      <div className="position-absolute start-50 translate-middle-x"
         style={{top: "25%"}}
      >
         <h2 className="text-center text-capitalize">Please wait for activation</h2>
         <p className="text-danger text-center">
            You should wait for admin to activate your account
         </p>
      </div>
   )
}

export default ActivatePage;
