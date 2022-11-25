import { Suspense } from "react";
import Loader from "../loader";
import ProjectPages from "./projectPages";

const ProjectContentWrap = ({ router }) => {
  return (
    <Suspense fallback={<Loader />}>
      <ProjectPages router={router} />
    </Suspense>
  );
};

export default ProjectContentWrap;
