import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/HomeComponent/Home/Home";
import Recruter from "../Components/RecruterCmponent/Recruter/Recruter";
import Jobseeker from "../Components/JobSeekerComponent/Jobseekers/Jobseeker";
import TermsCondition from "../Components/Terms&Condition/TermsCondition";
import Priching from "../Components/Terms&Condition/Priching";
import Verify from "../Components/VerifyComponent/Verify";
import Register from "../Components/VerifyComponent/Register";
import Recruiterlogin from "../Components/RecruiterloginComponent/Recruiterlogin";
import Profile from "../Components/ProfieComponent/Profile";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import Catagory from "../Components/CatagoryComponent/Catagory";
import CandidatesPage from "../Components/CandidateComponent/CandidatesPage";
import Blogpage from "../Components/BlogPageComponent/Blogpage";
import SubBlog from "../Components/BlogPageComponent/SubBlog";
import AboutHero from "../Components/AboutComponent/AboutHero/AboutHero";
import JobIndustury from "../Components/JobIndusturyComponent/JobIndustury";
import Details from "../Components/BlogPageComponent/Details";
import Enterpris from "../Components/EnterpriseComponent/Enterpris";
import Guidline from "../Components/GudielineComponent/Guidline";
import Faq from "../Components/JobSeekerComponent/Faq/Faq";
import RFaq from "../Components/RecruterCmponent/RFaq/RFaq";
import Layout from "../Dashboard/Layout";
import Post from "../Components/AdminDashbord/Post";
import Bringinfeatured from "../Components/AdminDashbord/Bringinfeatured";
import InfluencersOpinion from "../Components/AdminDashbord/InfluencersOpinion";
import TopCities from "../Components/JobIndusturyComponent/Job/TopCities";
import Review from "../Components/AdminDashbord/Review";
import AllBlogs from "../Components/AdminDashbord/AllBlogs";
import AllReview from "../Components/AdminDashbord/AllReview";
import Allinfuencers from "../Components/AdminDashbord/Allinfuencers";
import AllBringinfeatured from "../Components/AdminDashbord/AllBringinfeatured";
import Dashbord from "../Components/AdminDashbord/Dashbord";
import Comment from "../Components/AdminDashbord/Comment";
import Cities from "../Components/AdminDashbord/Cities";

export const route = createBrowserRouter(
    
    [
    
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/home',
                element: <Home></Home>

            },
            {
                path: '/recruiters',
                element: <Recruter></Recruter>

            },
            {
                path: '/job-seekers',
                element: <Jobseeker></Jobseeker>

            },
            {
                path: '/blogs',
                element: <Blogpage></Blogpage>

            },
            {
                path: '/catagory/blogs/:categoryName',
                element: <SubBlog></SubBlog>,
                loader: ({ params }) => fetch(`https://bringinserver-v1.vercel.app/catagory/blogs/${params.categoryName}`)

            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://bringinserver-v1.vercel.app/blogs/${params.id}`)


            },
            {
                path: '/about-us',
                element: <AboutHero></AboutHero>

            },
            {
                path: '/enterprise-solutions',
                element: <Enterpris></Enterpris>

            },
            {
                path: '/guideline',
                element: <Guidline></Guidline>

            },
            {
                path: '/terms-&-condition',
                element: <TermsCondition></TermsCondition>

            },
            {
                path: '/pricing',
                element: <Priching></Priching>

            },
            {
                path: '/verify',
                element: <Verify></Verify>

            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/recruiters-login',
                element: <Recruiterlogin></Recruiterlogin>

            },
            {
                path: '/profile',
                element: <Profile></Profile>,
                // loader: ({ params }) => fetch(`https://admin.bringin.io/api/candidates/by?filter/${params.user_id}`)


            },
            {
                path: '/privacy-Policy',
                element: <PrivacyPolicy></PrivacyPolicy>

            },
            {
                path: '/privacyPolicy',
                element: <PrivacyPolicy></PrivacyPolicy>

            },
            {
                path: '/jobindustry',
                element: <JobIndustury></JobIndustury>

            },
            {
                path: '/job-seekers-faq',
                element: <Faq></Faq>

            },
            {
                path: '/job-seekers-faq',
                element: <Faq></Faq>

            },
            {
                path: '/recruiters-faq',
                element: <RFaq></RFaq>

            },
            {
                path: '/review',
                element: <Review></Review>

            },
            {
                path: '/top-cities',
                element: <TopCities></TopCities>

            },
            {
                path: '/cetagory/:id',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`https://admin.bringin.io/api/client/hot/industries/category/${params.id}`)

            },
            {
                path: '/candidate/:id',
                element: <CandidatesPage></CandidatesPage>,
                loader: ({ params }) => fetch(`https://admin.bringin.io/api/candidates/by?filter/${params.id}`)


            },

        ]
    },
    {
        path: '/admin/dashboard',
        element: <Layout></Layout>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/admin/dashboard',
                element: <Dashbord></Dashbord>

            },
            {
                path: '/admin/dashboard/blogPost',
                element: <Post></Post>

            },
            {
                path: '/admin/dashboard/bringin-featured',
                element: <Bringinfeatured></Bringinfeatured>

            },
               { path: '/admin/dashboard/influencers-opinion',
                element: <InfluencersOpinion></InfluencersOpinion>

            },
            {
                path: '/admin/dashboard/review',
                element: <Review></Review>

            },
            {
                path: '/admin/dashboard/allblog',
                element: <AllBlogs></AllBlogs>

            },
            {
                path: '/admin/dashboard/allreview',
                element: <AllReview></AllReview>

            },
            {
                path: '/admin/dashboard/allinfuencers',
                element: <Allinfuencers></Allinfuencers>

            },
            {
                path: '/admin/dashboard/allbringinfeatured',
                element: <AllBringinfeatured></AllBringinfeatured>

            },
            {
                path: '/admin/dashboard/allcomment',
                element: <Comment></Comment>

            },
            {
                path: '/admin/dashboard/cities',
                element: <Cities></Cities>

            },
        ]
    }


])