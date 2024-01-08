import CandidateDownloadPage from "./DownloadPage/CandidateDownloadPage";
import RecruterDownloadPage from "./DownloadPage/recruterDownloadPage";

const Download = () => {
  return (
    <div className="lg:mx-none mx-[10px]">
        <RecruterDownloadPage></RecruterDownloadPage>
        <CandidateDownloadPage></CandidateDownloadPage>
    </div>
  );
};

export default Download;
