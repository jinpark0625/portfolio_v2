import { Suspense } from "react";
import Loader from "../loader";
import ProjectPages from "./projectPages";

const ContentWrap = ({ router }) => {
  return (
    <Suspense fallback={<Loader />}>
      <ProjectPages router={router} />
    </Suspense>
  );
};

export default ContentWrap;
