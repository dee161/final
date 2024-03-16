// import Feed from "@components/Feed";

// const Home = () => (
//   <section className="w-full flex-center flex-col">
//     <h1 className="head_text text-center">
//       Discover & Share
//       <br className="max-md:hidden" />
//       <span className="orange_gradient text-center">
//         {" "}
//         AI-Powered by chatbot{" "}
//       </span>
//     </h1>
//     <p className="desc text-center">
//       Determine how chatbot will generate revenue. Options may include
//       subscription-based access to premium features, licensing agreements with
//       organizations, or advertising partnerships.
//     </p>

//     <Feed />
//   </section>
// );

// export default Home;


import React from "react";
import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center animate-fadeInUp">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">
        {" "}
        AI-Powered by chatbot{" "}
      </span>
    </h1>
    <p className="desc text-center animate-fadeIn">
      Determine how chatbot will generate revenue. Options may include
      subscription-based access to premium features, licensing agreements with
      organizations, or advertising partnerships.
    </p>

    <Feed />
  </section>
);

export default Home;
