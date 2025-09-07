import PageNotFoundStyle from "../../styles/pages/errors/PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={PageNotFoundStyle.page}>
      <h1>Page Not Found...</h1>
    </div>
  )
};

export default PageNotFound;