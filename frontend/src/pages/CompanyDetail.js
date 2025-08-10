import { useParams } from "react-router-dom";

function CompanyDetail() {
  const { handle } = useParams();
  return <h2>Company Detail for {handle}</h2>;
}
export default CompanyDetail;