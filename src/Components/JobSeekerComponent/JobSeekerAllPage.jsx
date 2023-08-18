import Advanced from "./Advanced";
import Features from "./Features";
import JobSekkerHero from "./JobSekkerHero";
import JobSekkerbringinworks from "./JobSekkerbringinworks";

const JobSeekerAllPage = () => {
    return (
        <div>
            <JobSekkerHero></JobSekkerHero>
            <JobSekkerbringinworks></JobSekkerbringinworks>
            <Advanced></Advanced>
            <Features></Features>
        </div>
    );
};

export default JobSeekerAllPage;