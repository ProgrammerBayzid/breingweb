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
import RecruterProfile from "../Components/Recruter/RecruterProfile";
import Di from "../Components/CandidateComponent/Di";
import TopCities from "../Components/JobIndusturyComponent/Job/TopCities";
import ErropPage from "../Components/ErrorPage/ErropPage";
import Re from "../Components/ShereComponent/VerifyComponent/Re";
import BlogLayout from "../Layout/BlogLayout";
import ReceuterRegisterLayout from "../Layout/ReceuterRegisterLayout";
import CompanyRegister from "../Components/RecruiterloginComponent/CompanyRegister";
import Jobpost from "../Components/RecruiterloginComponent/JobPost/Jobpost";
import JobSheare from "../Components/RecruiterloginComponent/JobPost/JobSheare";
import RecruiterIdentityVerification from "../Components/RecruiterloginComponent/RecruiterIdentityVerification";
import VerifyCompanyWithImageUpload from "../Components/RecruiterloginComponent/CompanyVerification/VerifyCompanyWithImageUpload";
import VerifyCompanyDocuments from "../Components/RecruiterloginComponent/CompanyVerification/VerifyCompanyDocuments";
import VerifyCompanyWithConfirmationCode from "../Components/RecruiterloginComponent/CompanyVerification/VerifyCompanyWithConfirmationCode";
import Notifications from "../Components/SettingsPageForRecruiter/Notifications";
import TermsAndCons from "../Components/SettingsPageForRecruiter/TermsAndCons";
import About from "../Components/SettingsPageForRecruiter/About";
import CancelSubscription from "../Components/SettingsPageForRecruiter/CancelSubscription";
import Unsubscribe from "../Components/SettingsPageForRecruiter/Unsubscribe";
import JobEdit from "../Components/RecruiterloginComponent/JobPost/JobEdit";
import PreviewJob from "../Components/RecruiterloginComponent/JobPost/PreviewJob";
import CandidatesList from "../Components/CandidatesForRecruiter/CandidatesList";
import DetailsOfCandidate from "../Components/CandidatesForRecruiter/DetailsOfCandidate";
import ReportedCandidate from "../Components/CandidatesForRecruiter/ReportedCandidate";
import ManageJobs from "../Components/CandidatesForRecruiter/ManageJobs";
import EditJobs from "../Components/CandidatesForRecruiter/EditJobs";
import YourComponent from "../Components/RecruiterloginComponent/YourComponent";
import RegisterDahsbordLayout from "../Components/RegisterDahsbord/RegisterDahsbordLayout";
import RecruiterDashboard from "../Components/RegisterDahsbord/RecruiterDashboard";
import WelcomeMessage from "../Components/CandidatesForRecruiter/WelcomeMessage";
import ManageJobDetails from "../Components/CandidatesForRecruiter/ManageJobDetails";
import ManageJobDetailsEdit from "../Components/CandidatesForRecruiter/ManageJobDetailsEdit";
import NoJobPosts from "../Components/CandidatesForRecruiter/NoJobPosts";
import NoRejectedCandidate from "../Components/CandidatesForRecruiter/NoRejectedCandidate";
import FilterJobs from "../Components/CandidatesForRecruiter/FilterJobs";
import PaymentReceipt from "../Components/PurchaseHistory/PaymentReceipt";
import PaymentHistory from "../Components/PurchaseHistory/PaymentHistory";
import BuyPackage from "../Components/PurchaseHistory/BuyPackage";
import UpgradePackage from "../Components/PurchaseHistory/UpgradePackage";
import PrivacyOfCompany from "../Components/SettingsPageForRecruiter/PrivacyOfCompany";
import ContactUsPopup from "../Components/SettingsPageForRecruiter/ContactUsPopup";
import RecruiterPerSonalDashboard from "../Components/Recruter/RecruiterPerSonalDashboard";
import RecruterDashbordHeadre from "../Components/RegisterDahsbord/RecruterDashbordHeadre";
import RecruiterDashboardForSetting from "../Components/RegisterDahsbord/RecruiterDashboardForSetting";
import SuccessfulDelete from "../Components/SettingsPageForRecruiter/SuccessfulDelete";
import CancelSubscriptionSuccessful from "../Components/SettingsPageForRecruiter/CancelSubscriptionSuccessful";
import RecruterPrivetRoute from "../Components/RecruterPrivetRoute/RecruterPrivetRoute";
import SaveCandidatesList from "../Components/CandidatesForRecruiter/SaveCandidatesList";
import RecruiterSettingsDashboard from "../Components/RegisterDahsbord/RecruiterSettingsDashboard";
import DeleteModal from "../Components/SettingsPageForRecruiter/DeleteModal";
import RecruiterPurchaseDashboard from "../Components/RegisterDahsbord/RecruiterPurchaseDashboard";
import PurchasePackageModal from "../Components/PurchaseHistory/PurchasePackageModal";
import NoPackage from "../Components/PurchaseHistory/NoPackage";
import EmptyPackage from "../Components/PurchaseHistory/EmptyPackage";
import RecruterChatPage from "../Components/RecruterChatPage/RecruterChatPage";
import RecruterChatwork from "../Components/RecruterChatPage/RecruterChatwork";
import RecruterStartChat from "../Components/RecruterChatPage/RecruterStartChat";
import RecruterSearchCandidateList from "../Components/CandidatesForRecruiter/RecruterSearchCandidateList";
import ChoosePaymentMethod from "../Components/PurchaseHistory/ChoosePaymentMethod";
import Download from "../Components/MarketingPage/Download";
import MarketingPageLayout from "../Components/MarketingPage/MarketingPageLayout";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErropPage></ErropPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/in",
        element: <Home></Home>,
      },
      {
        path: "/recruiters",
        element: <RecruitersAllPage></RecruitersAllPage>,
      },
      {
        path: "/job-seekers",
        element: <JobSeekerAllPage></JobSeekerAllPage>,
      },
      
    ],
  },
  {
    path: "/",
    element: <MarketingPageLayout></MarketingPageLayout>,
    errorElement: <ErropPage></ErropPage>,
    children: [
      {
        path: "/download",
        element: <Download></Download>,
      },
    ],
  },

  {
    path: "/candidate-profile/:_id",
    element: <CandidateDetails></CandidateDetails>,
    loader: ({ params }) =>
      fetch(`https://rsapp.unbolt.co/single_profile/${params._id}`, {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }),
  },
  {
    path: "/profiles-recruiters/:_id",
    element: <RecruterProfile></RecruterProfile>,
    loader: ({ params }) =>
      fetch(`https://rsapp.unbolt.co/clint_recruiters_profile/${params._id}`, {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }),
  },
  {
    path: "/job-details/:_id",
    element: <JobDetails></JobDetails>,
    loader: ({ params }) =>
      fetch(`https://rsapp.unbolt.co/job_details/${params._id}`, {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }),
  },

  {
    path: "/",
    element: <WithOutHedline></WithOutHedline>,
    errorElement: <ErropPage></ErropPage>,
    children: [
      {
        path: "/about-us",
        element: <AboutHero></AboutHero>,
      },
      {
        path: "/cancellation-and-refund-policy",
        element: <RefundCancellationPolicy></RefundCancellationPolicy>,
      },

      {
        path: "/terms-and-conditions",
        element: <TermsCondition></TermsCondition>,
      },
      {
        path: "/pricing",
        element: <Priching></Priching>,
      },

      {
        path: "/profiles-candidates/:_id",
        element: <Profile></Profile>,
        loader: ({ params }) =>
          fetch(`https://rsapp.unbolt.co/single_profile/${params._id}`, {
            method: "GET",
            headers: {
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
          }),
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/re",
        element: <Re></Re>,
      },

      {
        path: "/job-industrys",
        element: <JobIndustury></JobIndustury>,
      },
      {
        path: "/job-seekers-faqs",
        element: <Faq></Faq>,
      },
      {
        path: "/recruiters-faqs",
        element: <RFaq></RFaq>,
      },

      {
        path: "/top-cities",
        element: <TopCities></TopCities>,
      },
      {
        path: "/candidates",
        element: <SearchCandidate></SearchCandidate>,
      },

      {
        path: "/categories/:industryname",
        element: <Catagory></Catagory>,
        loader: ({ params }) =>
          fetch(
            `https://rsapp.unbolt.co/job_functionalarea/${params.industryname}`,
            {
              method: "GET",
              headers: {
                authorization: `bearer ${localStorage.getItem("token")}`,
              },
            }
          ),
      },
      {
        path: "/expertise-areas/:categoryname",
        element: <ExpertiseArea></ExpertiseArea>,
        loader: ({ params }) =>
          fetch(
            `https://rsapp.unbolt.co/expertisearea/${params.categoryname}`,
            {
              method: "GET",
              headers: {
                authorization: `bearer ${localStorage.getItem("token")}`,
              },
            }
          ),
      },
      {
        path: "/candidates-division/:name",
        element: <Di></Di>,
        loader: ({ params }) => {
          // Save the name parameter to localStorage
          localStorage.setItem("selectedLocation", params.name);

          return fetch(
            `https://rsapp.unbolt.co/candidatelist_devision_clint?name=${params.name}`,
            {
              method: "GET",
              headers: {
                authorization: `bearer ${localStorage.getItem("token")}`,
              },
            }
          );
        },
      },

      {
        path: "/candidates/:functionalname",
        element: (
          <CandidatesPage key={window.location.pathname}></CandidatesPage>
        ),
        loader: ({ params }) => {
          // Save the name parameter to localStorage
          localStorage.setItem("selectedfuntionalareas", params.functionalname);

          return fetch(
            `https://rsapp.unbolt.co/candidatelist_clint?functionalname=${params.functionalname}`,
            {
              method: "GET",
              headers: {
                authorization: `bearer ${localStorage.getItem("token")}`,
              },
            }
          );
        },
      },

      {
        path: "/enterprise-hiring",
        element: <Enterpris></Enterpris>,
      },
      {
        path: "/guidelines-seekers",
        element: <Guidline></Guidline>,
      },

      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/",
    element: <ReceuterRegisterLayout></ReceuterRegisterLayout>,
    errorElement: <ErropPage></ErropPage>,
    children: [
      {
        path: "/recruiters-login",
        element: <Recruiterlogin></Recruiterlogin>,
      },
      {
        path: "/verifications",
        element: <Verify></Verify>,
      },
      {
        path: "/registration-recruiters",
        element: <Register></Register>,
      },
      {
        path: "/register-your-company",
        element: <CompanyRegister></CompanyRegister>,
      },
      {
        path: "/recruiter-identity-verification",
        element: (
          <RecruiterIdentityVerification></RecruiterIdentityVerification>
        ),
      },
      {
        path: "verify-company",
        element: <VerifyCompanyWithImageUpload></VerifyCompanyWithImageUpload>,
      },
      
      {
        path: "/verify-company-documents",
        element: <VerifyCompanyDocuments></VerifyCompanyDocuments>,
      },
      {
        path: "/verify-company-with-confirmation-code",
        element: (
          <VerifyCompanyWithConfirmationCode></VerifyCompanyWithConfirmationCode>
        ),
      },
      {
        path: "/notifications",
        element: <Notifications></Notifications>
      },
      {
        path: "/yourComponent",
        element: <YourComponent></YourComponent>,
      },

      {
        path: "/privacy",
        element: <PrivacyOfCompany></PrivacyOfCompany>
      },
      {
        path: "/terms",
        element: <TermsAndCons></TermsAndCons>
      },
      {
        path: "/privacy",
        element: <PrivacyOfCompany></PrivacyOfCompany>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact-us-popup",
        element: <ContactUsPopup></ContactUsPopup>
      },
      {
        path: "/cancel-subscription",
        element: <CancelSubscription></CancelSubscription>
      },
      {
        path: "/unsubscribe",
        element: <Unsubscribe></Unsubscribe>
      },
      {
        path: "/reported-candidate",
        element: <ReportedCandidate></ReportedCandidate>,
      },

      {
        path: "/edit-jobs",
        element: <EditJobs></EditJobs>,
      },
      {
        path: "/recruiter-dashboard",
        element: <RecruiterDashboard></RecruiterDashboard>,
      },
      {
        path: "/welcome-message",
        element: <WelcomeMessage></WelcomeMessage>,
      },
      {
        path: "/no-job-posts",
        element: <NoJobPosts></NoJobPosts>,
      },
      {
        path: "/no-rejected-candidate",
        element: <NoRejectedCandidate></NoRejectedCandidate>,
      },
      {
        path: "/filter-jobs",
        element: <FilterJobs></FilterJobs>,
      },
      {
        path: "/contact-us-popup",
        element: <ContactUsPopup></ContactUsPopup>
      },
      {
        path: "/recruiter-personal-dashboard",
        element: <RecruiterPerSonalDashboard></RecruiterPerSonalDashboard>
      },
      {
        path: "/recruiter-personal-profile",
        element: <RecruterDashbordHeadre></RecruterDashbordHeadre>
      },
      {
        path: "/recruiter-dashboard-for-settings",
        element: <RecruiterDashboardForSetting></RecruiterDashboardForSetting>
      },
      {
        path: "/delete-successful",
        element: <SuccessfulDelete></SuccessfulDelete>
      },
      {
        path: "/cancel-subscription-successful",
        element: <CancelSubscriptionSuccessful></CancelSubscriptionSuccessful>
      },
      {
        path: "/privacy",
        element: <PrivacyOfCompany></PrivacyOfCompany>
      },
      {
        path: "/no-package",
        element: <NoPackage></NoPackage>,
      },

      {
        path: "/empty-package",
        element: <EmptyPackage></EmptyPackage>,
      },
      {
        path: "/register-job-post",
        element: <Jobpost></Jobpost>,

      },
      {
        path: "/registration-job-post-success",
        element: <JobSheare></JobSheare>,
      },

      {
        path: "/registration-job-post-edit/:_id",
        element: <JobEdit></JobEdit>,
        loader: ({ params }) =>
          fetch(`https://rsapp.unbolt.co/job_details/${params._id}`, {
            method: "GET",
            headers: {
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
          }),
      },
      {
        path: "/job-details-preview/:_id",
        element: <PreviewJob></PreviewJob>,
        loader: ({ params }) =>
          fetch(`https://rsapp.unbolt.co/job_details/${params._id}`, {
            method: "GET",
            headers: {
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
          }),
      },
    ],
  },

  {
    path: "/dashboard/recruiter/",
    element: <RegisterDahsbordLayout></RegisterDahsbordLayout>,
    errorElement: <ErropPage></ErropPage>,
    children: [
      {
        path: "/dashboard/recruiter/",
        element: (
          <RecruterPrivetRoute>
            <CandidatesList></CandidatesList>{" "}
          </RecruterPrivetRoute>
        ),
      },
      {
        path: "/dashboard/recruiter/candidates-list",
        element: (
          <RecruterPrivetRoute>
            <CandidatesList></CandidatesList>
          </RecruterPrivetRoute>
        ),
      },
      {
        path: "/dashboard/recruiter/candidates",
        element: (
          <RecruterPrivetRoute>
            <RecruterSearchCandidateList></RecruterSearchCandidateList>
          </RecruterPrivetRoute>
        ),
      },
      {
        path: "/dashboard/recruiter/save-candidates-list",
        element: (
          <RecruterPrivetRoute>
            <SaveCandidatesList></SaveCandidatesList>
          </RecruterPrivetRoute>
        ),
      },
      {
        path: "/dashboard/recruiter/details-of-candidate/:_id",
        element: (
          <RecruterPrivetRoute>
            <DetailsOfCandidate></DetailsOfCandidate>
          </RecruterPrivetRoute>
        ),

        loader: ({ params }) =>
          fetch(`https://rsapp.unbolt.co/single_profile/${params._id}`, {
            method: "GET",
            headers: {
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
          }),
      },
      {
        path: "/dashboard/recruiter/manage-jobs",
        element: (
          <RecruterPrivetRoute>
            <ManageJobs></ManageJobs>
          </RecruterPrivetRoute>
        ),
      },
      {
        path: "/dashboard/recruiter/register-job-post",
        element: <Jobpost></Jobpost>,
      },
      {
        path: "/dashboard/recruiter/registration-job-post-success",
        element: <JobSheare></JobSheare>,
      },
      {
        path: "/dashboard/recruiter/job-details/:_id",
        element: (
          <RecruterPrivetRoute>
            <ManageJobDetails></ManageJobDetails>
          </RecruterPrivetRoute>
        ),

        loader: ({ params }) =>
          fetch(`https://rsapp.unbolt.co/job_details/${params._id}`, {
            method: "GET",
            headers: {
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
          }),
      },
   
      {
        path: "/dashboard/recruiter/job-details-edit/:_id",
        element: (
          <RecruterPrivetRoute>
            <ManageJobDetailsEdit></ManageJobDetailsEdit>
          </RecruterPrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://rsapp.unbolt.co/job_details/${params._id}`, {
            method: "GET",
            headers: {
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
          }),
      },
      {
        path: "/dashboard/recruiter/welcome-message",
        element: <WelcomeMessage></WelcomeMessage>,
      },
      {
        path: "/dashboard/recruiter/contact-us-popup",
        element: <ContactUsPopup></ContactUsPopup>
      },
    

    ]
  },
  {
    path: "/dashboard/recruiter/chat",
    element: <RecruterChatPage></RecruterChatPage>,
    children:[
      {
        path: "/dashboard/recruiter/chat/",
        element: <RecruterStartChat></RecruterStartChat>
      },
      {
        path: "/dashboard/recruiter/chat/:id",
        element: <RecruterChatwork></RecruterChatwork>
      },
    ]
  },
  {
    path: "/dashboard/recruiter/profile",
    element: <RecruiterSettingsDashboard></RecruiterSettingsDashboard>,
    errorElement: <ErropPage></ErropPage>,
    children: [
      {
        path: "/dashboard/recruiter/profile",
        element: <Notifications></Notifications>
      },
      {
        path: "/dashboard/recruiter/profile/notifications",
        element: <Notifications></Notifications>
      },
      {
        path: "/dashboard/recruiter/profile/privacy",
        element: <PrivacyOfCompany></PrivacyOfCompany>
      },
      {
        path: "/dashboard/recruiter/profile/terms",
        element: <TermsAndCons></TermsAndCons>
      },
      {
        path: "/dashboard/recruiter/profile/about",
        element: <About></About>
      },
      {
        path: "/dashboard/recruiter/profile/delete-modal",
        element: <DeleteModal></DeleteModal>
      },
      // {
      //   path: "/dashboard/recruiter/profile/cancel-subscription",
      //   element: <CancelSubscription></CancelSubscription>
      // },
      {
        path: "/dashboard/recruiter/profile/unsubscribe",
        element: <Unsubscribe></Unsubscribe>
      },
    ]
  },
  {
    path: "/dashboard/recruiter/purchase",
    element: <RecruiterPurchaseDashboard></RecruiterPurchaseDashboard>,
    errorElement: <ErropPage></ErropPage>,
    children: [
      {
        path: "/dashboard/recruiter/purchase/",
        element: <UpgradePackage></UpgradePackage>
      },
      {
        path: "/dashboard/recruiter/purchase/payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/recruiter/purchase/buy-package",
        element: <BuyPackage></BuyPackage>,
      },
      {
        path: "/dashboard/recruiter/purchase/privacy",
        element: <PrivacyOfCompany></PrivacyOfCompany>
      },
      {
        path: "/dashboard/recruiter/purchase/terms",
        element: <TermsAndCons></TermsAndCons>
      },
      {
        path: "/dashboard/recruiter/purchase/payment-receipt",
        element: <PaymentReceipt></PaymentReceipt>,
      },
      {
        path: "/dashboard/recruiter/purchase/purchase-package-modal",
        element: <PurchasePackageModal></PurchasePackageModal>,
      },
      {
        path: "/dashboard/recruiter/purchase/choose-payment-method",
        element: <ChoosePaymentMethod></ChoosePaymentMethod>,
      },
      // {
      //   path: "/no-package",
      //   element: <NoPackage></NoPackage>,
      // },

      // {
      //   path: "/empty-package",
      //   element: <EmptyPackage></EmptyPackage>,
      // },
     
    ]
  },
  {
    path: "/",
    element: <BlogLayout></BlogLayout>,
    errorElement: <ErropPage></ErropPage>,
    children: [
      {
        path: "/blog/categoriess/:categoryName",
        element: <SubBlog></SubBlog>,
        loader: ({ params }) =>
          fetch(
            `https://bringinserver-v1.vercel.app/catagory/blogs/${params.categoryName}`
          ),
      },
      {
        path: "/blog",
        element: <Blogpage></Blogpage>,
      },
      {
        path: "/blog/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://bringinserver-v1.vercel.app/blogs/${params.id}`),
      },
    ],
  },
]);
