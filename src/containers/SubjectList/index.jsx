
import Pagination from "components/Pagination";

export default function SubjectList() {
  return (
    <>
      <Container />    
      
      <Pagination onChange={(p) => console.log(p)} itemCount={26}/>
    </>
 
  )
}
const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`
