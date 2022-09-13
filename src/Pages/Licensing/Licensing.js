import React from 'react';

const Licensing = () => {
  return (
    <section className="container px-6 mx-auto relative pt-20 pb-20">
      <div className="pt-8 md:pt-16 lg:pt-20 px-6">
        <h2 className="mb-2 text-4xl md:text-5xl text-left tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
          MIT
          <span className="text-indigo-600 dark:text-indigo-500"> Licence</span>
        </h2>
         
        <p className="text-left text-3xl dark:text-white text-dark mt-8 max-w-xl text-lg">
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions: 
         </p>
         <p className="text-left text-3xl dark:text-white text-dark mt-5 max-w-xl text-lg">
          The above copyright notice and this
          permission notice shall be included in all copies or substantial
          portions of the Software. 
         </p>
         <p className="text-left text-3xl dark:text-white text-dark mt-5 max-w-xl text-lg">   
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT
          WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
          THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
          AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
          HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
          IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
          IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
        </p>
        <div className="flex items-center justify-evenly">
          <div>
            <h3 className="text-center text-3xl font-bold">Permissions</h3>
            <ul className="">
              <li className="text-left text-3xl dark:text-white text-dark sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-center text-3xl dark:text-white text-dark mt-5 max-w-xl text-lg font-bold">
         Copyright (c) 2022 Bibiwei Pere
        </h3>
      </div>
    </section>
  );
};

export default Licensing;
