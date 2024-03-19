import { useParams } from "react-router-dom";

const Deneme = () => {
  const params = useParams();
  const { keyword } = params;
  return (
    <div>
      deneme -{">"} {keyword}
    </div>
  );
};

export default Deneme;
