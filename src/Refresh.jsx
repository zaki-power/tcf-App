import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Refresh({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation");
    const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

    if (isReload && location.pathname.startsWith("/question/")) {
      navigate("/", { replace: true });
    }
  }, []);

  return children;
}
export default Refresh;
