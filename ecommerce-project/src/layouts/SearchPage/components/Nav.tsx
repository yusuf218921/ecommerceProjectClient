import { useState } from "react";

export const Nav = () => {
  const [search, setSearch] = useState<string>();
  const [searchUrl, setSearchUrl] = useState<string>("");

  const searchHandleChange = () => {
    if (search === "") {
      setSearchUrl("/products");
    } else {
      setSearchUrl(
        `/products/search/${search}`.replace(/\s/g, "-").toLowerCase()
      );
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Arama"
                onChange={(e) => setSearch(e.target.value)}
              />
              <a
                href={searchUrl}
                className="btn btn-outline-success"
                onClick={() => searchHandleChange()}
              >
                Arama
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
