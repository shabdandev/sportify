"use client";
import { useGetCategorySeveralQuery } from "@/redux/api/category";
import scss from "./SearchContent.module.scss";

const SearchContent = () => {
  const { data, isLoading, error } = useGetCategorySeveralQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error loading categories</p>;
  }
  const itemCategory = data?.categories.items;

  return (
    <section>
      <div className={scss.SearchContent}>
        <div className="container">
          <div className={scss.content}>
            <div className="">
              {itemCategory?.map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: `url(${item.icons[0].url})`,
                    width: "200px",
                    height: "200px",
                    cursor: "pointer",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className=""
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchContent;
