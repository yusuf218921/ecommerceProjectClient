import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const [url, setUrl] = useState("");
  const params = useParams();
  const { keyword } = params;
  const { categoryName } = params;

  useEffect(() => {
    const currentUrl = window.location.href;
    setUrl(currentUrl);
  }, []);

  if (url.includes("search")) {
    return <>arama içeriyor {keyword}</>;
  } else if (url.includes("category")) {
    return <>kategori içeriyor {categoryName}</>;
  } else {
    return <div>normal ürünler sayfası</div>;
  }
};

export default SearchPage;
