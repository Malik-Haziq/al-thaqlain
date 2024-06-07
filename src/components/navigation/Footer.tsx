import logo from "../../assets/logo.png";
import facebook from "../../assets/footer/facebook.svg";
import linkdin from "../../assets/footer/linkdin.svg";
import twitter from "../../assets/footer/twitter.svg";



export function Footer() {
  return (
    <>
      <footer className="bg-black-100  py-12">
        <main className="flex justify-center gap-28  flex-wrap mb-12">
          <div >
            <img src={logo} className="h-24 mb-8 " alt="Al Thaqlain Logo" />
            <h1 className="text-lg font-medium mb-4 text-white-500">Al-Thaqlain Travel & Tours</h1>
            <p className="text-white-300">
              Ziyarat packages to Iraq, Iran & Syria that are <br></br> specially designed to make our customer’s <br></br> spiritual trip convenient and memorable.
            </p>
          </div>
          <div className="pt-6 cursor-pointer">
            <h2 className="text-xl mb-8">SERVICES</h2>
            <p className="mb-4 text-white-300 hover:text-white-500">Hotel Booking</p>
            <p className="mb-4 text-white-300 hover:text-white-500">Visa</p>
            <p className="mb-4 text-white-300 hover:text-white-500">Transportation</p>
            <p className="mb-4 text-white-300 hover:text-white-500">Packages</p>
            
          </div>
          <div className="pt-6 cursor-pointer">
            <h2 className="text-xl mb-8">COMPANY</h2>
            <p className="mb-4 text-white-300 hover:text-white-500">Home</p>
            <p className="mb-4 text-white-300 hover:text-white-500">About</p>
            <p className="mb-4 text-white-300 hover:text-white-500">Contact</p>
            <p className="mb-4 text-white-300 hover:text-white-500">Services</p>
          </div>
          <div>
            <h2 className="text-xl mb-8 pt-6">CONTACT INFO</h2>
            <p className="mb-4 text-white-300">
              Office NO. (A15/2-3) Al-Madeena al Maiya , Center jabal <br></br> Aamil Uposit Haye al- Adalaa ,Najaf Al Ashraf-IRAQ.
            </p>
            <p className="mb-4 text-white-300 cursor-pointer hover:text-white-500">+964 780 9970416</p>
            <p className="mb-4 text-white-300 cursor-pointer hover:text-white-500">+964 773 794 0863</p>
            <p className="mb-4 text-white-300 cursor-pointer hover:text-white-500">info@althaqlain.com</p>
          </div>
        
        </main>
        <div className="flex justify-center">
        <div>
        © 2024. All right reserved. Al-Thaqlain Travel & Tours. Powered by <a className="text-secondary-500" href="https://codewithnaqvi.com">CodeWithNaqvi</a>
        </div>
        <div className="flex gap-4">
          <a href="#"><img src={facebook} alt="facebook icon" className="w-8" /></a>
          <a href="#"><img src={linkdin} alt="linkdin icon" className="w-8" /></a>
          <a href="#"><img src={twitter} alt="twitter icon" className="w-8" /></a>
        </div>
        </div>
      </footer>
    </>
  );
}
