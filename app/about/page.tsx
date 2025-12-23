import Hero from "@/components/about/Hero"
import Section2 from "@/components/about/Section2"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Section3 from "@/components/about/Section3"
import Section4 from "@/components/about/Section4"

const page = () => {
  return (
     <div className="min-h-screen flex flex-col">
            <Header />
              <Hero />
              <Section2 />
              <Section3 />
              <Section4 />
            <Footer />
            </div>
  )
}

export default page