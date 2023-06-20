import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    // <footer className="w-100 mt-auto text-dark p-4">
    //   <div className="container text-center">
    //     {location.pathname !== '/' && (
    //       <button
    //         className="btn btn-dark mb-3"
    //         onClick={() => navigate(-1)}
    //       >
    //         &larr; Go Back
    //       </button>
    //     )}
    //     <h4>&copy; {new Date().getFullYear()} - Flawless Function </h4>
    //   </div>
    // </footer>

    <footer class="bg-transparent rounded-lg m-4">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-yellow-100 sm:text-center">© 2023 <a href="#" class="hover:underline">Flawless Function™</a>.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-yellow-100 sm:mt-0">
          <li>
            <a href="https://github.com/Vidishap95" class="mr-4 hover:underline md:mr-6 ">Vidisha Patel</a>
          </li>
          <li>
            <a href="https://github.com/amalahema" class="mr-4 hover:underline md:mr-6">AmalaHema Francis</a>
          </li>
          <li>
            <a href="https://github.com/paolacaceresoma" class="mr-4 hover:underline md:mr-6">Paola Caceres Omana</a>
          </li>
          <li>
            <a href="https://github.com/ALeoVerseau" class="hover:underline">Leo Liu</a>
          </li>
        </ul>
      </div>
    </footer>

  );
};

export default Footer;
