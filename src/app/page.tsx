import Navbar from "@/components/navbar"
import Hero from "./components/Hero"
import Statistic from "./components/Statictic"
import AvailableQuiz from "./components/AvailbelQuiz"
import Footer from "@/components/footer"
const Home = () => 
{   
    return(
        <>

            <Navbar /> 
                <div className="pt-14 lg:pt-18">
                    <Hero /> 
                    <Statistic /> 
                    <AvailableQuiz /> 
                </div>
            <Footer /> 
        </>
    )
}
export default Home