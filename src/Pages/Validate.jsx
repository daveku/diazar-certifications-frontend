import { useParams } from "react-router-dom";
import PersonCard from "../Components/PersonCard";
import SearchDocument from "../Components/SearchDocument";

const Validate = () => {
  const { ID } = useParams();

  if (!ID) {
    return <SearchDocument />;
  } else {
    return <PersonCard ID={ID} />;
  }
};

export default Validate;
