import scss from "./SearchContent.module.scss";

const SearchContent = () => {
  return (
    <section>
      <div className={scss.SearchContent}>
        <div className="container">
          <div className={scss.content}>SearchContent</div>
        </div>
      </div>
    </section>
  );
};

export default SearchContent;
