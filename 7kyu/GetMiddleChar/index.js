function getMiddle(s)
{
  return s.length % 2 ? s.charAt(s.length/2 - 1) + s.charAt(s.length/2) : s.charAt(Math.floor(s.length/2))
}
getMiddle("teest")

//Another solution
function getMiddle(s)
{
  return s.subStr(Math.ceil(s.length/2 - 1), s.length % 2 === 0 ? 2 : 1);
}
getMiddle("teest")