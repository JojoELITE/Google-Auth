import './index.css';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

function App() {

  const session = useSession();
  const supabase = useSupabaseClient();

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar'
      }
    });
    if (error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  console.log(session);

  return (
    <div className="App">
      <div>
        {session ?
          <div className='col'>

            <div>


              <h6>
                L'engagement de la communauté

              </h6>

              <h3>
                Eventi est une communauté où quiconque peut trouver sa place

              </h3>

              <p>Afin de maintenir cet engagement, nous vous demandons de bien vouloir consentir à ce qui suit :
              </p>

              <p>Engageons-nous ensemble à faire preuve de respect envers chaque membre de la communauté Airbnb, quelle que soit sa couleur de peau, sa religion, sa nationalité ou origine, son handicap, son sexe, son identité de genre, son orientation sexuelle ou son âge.

              </p>

              <div>

                <a href='https://eventi-service.vercel.app/addRoom/step01'>

                  Continuer

                </a>
              </div>



              <button onClick={() => signOut()}>Sign Out</button>

            </div>

          </div>
          :

          <div className=' mx-auto w-full lg:w-1/2 px-0 lg:px-10 py-8 lg:py-10'>

            <div className="p-6  mt-8 rounded-3xl border-2 border-gray-100">
              <div className="">
                <h1 className=" text-2xl font-bold  dark:text-white text-center">
                  Content de vous revoir
                </h1>

                <div className=" flex flex-col justify-center py-12">
                  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
                    </div>

                    <div className="relative space-y-6 bg-white shadow-lg rounded-3xl p-20 m-1 lg:mt-0">


                      <div className="w-full flex justify-center items-center">

                        <button onClick={() => googleSignIn()} className="flex items-center bg-white border border-gray-300 rounded-xl shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                          <span>Continuez avec Google</span>
                        </button>


                      </div>

                      <div className="w-full flex justify-center items-center">
                        <button className="flex items-center bg-white border border-gray-300 rounded-xl shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          <img className="h-8 w-8 mr-2" src="../image/icloud.png" alt="icon" />
                          <span>Continuez avec icloud</span>
                        </button>
                      </div>

                      <div className="w-full flex justify-center items-center">
                        <button className="flex items-center bg-white border border-gray-300 rounded-xl shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          <img className="h-6 w-6 mr-2" src="../image/microsoft.png" alt="icon" />
                          <span>Continuez avec Microsoft</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
