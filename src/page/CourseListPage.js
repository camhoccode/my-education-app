import useTranslate from "../utils/hook/useTranslate";
import { generatePath, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

function CourseListPage() {
  const navigate = useNavigate();
  const t = useTranslate();
  const { search } = useLocation();
  const query = qs.parse(search, { ignoreQueryPrefix: true });

  return (
    <div className="block m-auto">
      <div>This is listPage</div>
      <div>
        <button
          className="bg-[#7a0fe411] rounded-md p-2 mx-2"
          onClick={() => {
            navigate("/detail");
          }}
        >
          DetailPage
        </button>

        <button
          className="bg-[#7a0fe411] rounded-md p-2"
          onClick={() => {
            query.locale === "vi"
              ? navigate("")
              : navigate({ search: "?locale=vi" });
          }}
        >
          Language: {t.commons.en}
        </button>
      </div>
    </div>
  );
}

export default CourseListPage;
