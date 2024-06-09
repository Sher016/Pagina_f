// import Tweet from "../../components/Tweet/Tweet"
// import CreateTweet from "../../components/CreateTweet/CreateTweet"
// import { useContext, useEffect, useState } from "react"
// import { UserContext } from "../../contexts/userContext"
import { useNavigate } from 'react-router-dom';


function Home() {

  const navigate = useNavigate();

  return (
    <>
      {/* <CreateTweet onCreate={createTweet} />
      <section>
        {tweets.map((tweet) => <Tweet key={tweet.id} data={tweet} onDelete={user?.user === tweet.user ? deleteTweet : null}></Tweet>)}
      </section> */}

      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-1/3">
            <h1 className="text-4xl font-bold leading-9 text-[#248566]">Cursos en línea</h1>
            <p className="text-base leading-6 mt-4 text-black">Podrás encontrar miles de cursos de diferentes áreas en las que podrás potenciar tus habilidades personales, técnicas y profesionales.</p>
            <button role="button" aria-label="view catalogue" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-bold leading-none text-black flex items-center hover:underline" onClick={() => navigate('/courses')}>
              Ver cursos
            </button>
          </div>
          <div className="lg:w-7/12 lg:mt-0 mt-8">
            <div className="w-full h-full bg-red-200">
              <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201804/online_education_computer_edutech.jpeg?size=690:388" alt="apartment design" className="w-full sm:block hidden" />
              <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201804/online_education_computer_edutech.jpeg?size=690:388" alt="apartment design" className="sm:hidden block w-full" />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
              <img src="https://www.msmunify.com/wp-content/uploads/2023/11/msm-online-courses-india.jpg" className="w-full" alt="kitchen" />
              <img src="https://img.freepik.com/premium-vector/online-education-banners-books-stack-courses-training_39422-124.jpg" className="w-full" alt="sitting room" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home