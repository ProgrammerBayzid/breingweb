import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import TermsCondition from "../Components/Terms&Condition/TermsCondition";
import Priching from "../Components/Terms&Condition/Priching";
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
import ErropPage from "../Components/ErrorPage/ErropPage";
import AddCategory from "../Components/AdminDashbord/AddCategory";
import AllCategory from "../Components/AdminDashbord/AllCategory";
import RefundCancellationPolicy from "../Components/RefundCancellationPolicy/RefundCancellationPolicy";
import ExpertiseArea from "../Components/ExpertiseArea/ExpertiseArea";
import SearchCandidate from "../Components/SearchCandidate/SearchCandidate";
import Home from "../Components/HomeComponent/Home";
import JobSeekerAllPage from "../Components/JobSeekerComponent/JobSeekerAllPage";
import RecruitersAllPage from "../Components/RecruitersComponent/RecruitersAllPage";
import Faq from "../Components/JobSeekerComponent/Faq";
import RFaq from "../Components/RecruitersComponent/RFaq";
import Verify from "../Components/ShereComponent/VerifyComponent/Verify";
import Register from "../Components/ShereComponent/VerifyComponent/Register";
import WithOutHedline from "../Layout/WithOutHedline";
import ContactUs from "../Components/ContactUsComponent/ContactUs";
import CandidateDetails from "../LinkComponent/CandidateDetails";
import JobDetails from "../LinkComponent/JobDetails";

export const route = createBrowserRouter(
    
    [
    
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErropPage></ErropPage>,
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
                element: <RecruitersAllPage></RecruitersAllPage>

            },
            {
                path: '/jobseekers',
                element: <JobSeekerAllPage></JobSeekerAllPage>

            },
           
            {
                path: '/catagory/blogs/:categoryName',
                element: <SubBlog></SubBlog>,
                loader: ({ params }) => fetch(`https://bringinserver-v1.vercel.app/catagory/blogs/${params.categoryName}`)

            },
         
            {
                path: '/aboutus',
                element: <AboutHero></AboutHero>

            },
            {
                path: '/cancellation&pefundpolicy',
                element: <RefundCancellationPolicy></RefundCancellationPolicy>

            },
           
            {
                path: '/terms&conditions',
                element: <TermsCondition></TermsCondition>

            },
            {
                path: '/pricing',
                element: <Priching></Priching>

            },
           
            
          
            {
                path: '/profile/:_id',
                element: <Profile></Profile>,
                loader: ({ params }) => fetch(`https://rsapp.bringin.io/single_profile/${params._id}`,
                {
                    method: 'GET',
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    }
                }
                )


            },
            {
                path: '/privacyPolicy',
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
                path: '/jobseekersfaq',
                element: <Faq></Faq>

            },
            {
                path: '/recruitersfaq',
                element: <RFaq></RFaq>

            },
            {
                path: '/review',
                element: <Review></Review>

            },
            {
                path: '/topcities',
                element: <TopCities></TopCities>

            },
            {
                path: '/candidates',
                element: <SearchCandidate></SearchCandidate>

            },
           
            {
                path: '/cetagory/:_id',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`https://rsapp.bringin.io/job_functionalarea/${params._id}`,{
                    method: 'GET',
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    }
                })

            },
            {
                path: '/expertisearea/:_id',
                element: <ExpertiseArea></ExpertiseArea>,
                loader: ({ params }) => fetch(`https://rsapp.bringin.io/expertisearea/${params._id}`,{
                    method: 'GET',
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    }
                })

            },
            {
                path: '/candidate/:id',
                element: <CandidatesPage></CandidatesPage>,
                loader: ({ params }) => fetch(`https://rsapp.bringin.io/candidatelist_clint?functionalareaid=${params.id}`,
                {
                    method: 'GET',
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    }
                })


            },

        ]
    },


    {
        path: '/candidatedetails/:_id',
        element: <CandidateDetails></CandidateDetails>,
        loader: ({ params }) => fetch(`https://rsapp.bringin.io/single_profile/${params._id}`,
        {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }
        )


    },
    {
        path: '/jobdetails/:_id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`https://rsapp.bringin.io/job_details/${params._id}`,
        {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }
        )


    },


    {
        path: '/',
        element: <WithOutHedline></WithOutHedline>,
        errorElement: <ErropPage></ErropPage>,
        children: [
            {
                path: '/blogs',
                element: <Blogpage></Blogpage>

            },
            {
                path: '/enterprisesolutions',
                element: <Enterpris></Enterpris>

            },
            {
                path: '/guideline',
                element: <Guidline></Guidline>

            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://bringinserver-v1.vercel.app/blogs/${params.id}`)


            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>

            },
        ]

        },

    {
        path: '/recruiterslogin',
        element: <Recruiterlogin></Recruiterlogin>

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
                path: '/admin/dashboard/bringinfeatured',
                element: <Bringinfeatured></Bringinfeatured>

            },
               { path: '/admin/dashboard/influencersopinion',
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
            {
                path: '/admin/dashboard/addcategory',
                element: <AddCategory></AddCategory>

            },
            {
                path: '/admin/dashboard/allcategory',
                element: <AllCategory></AllCategory>

            },
        ]
    }


])