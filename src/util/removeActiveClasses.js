export function removeActiveClasses(elsArr)
{
   elsArr.forEach(el => el.classList.remove('active'));
}