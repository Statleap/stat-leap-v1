import React from "react";
import { motion } from "framer-motion";


const subscriptionPlans = [
  {
    name: "Pro",
    price: "$25",
    duration: "6 months",
    benefits: [
      "Access to essential tools for data analysis.",
      "Priority customer support.",
      "Regular updates and new features.",
      "Flexible subscription options."
    ]
  },
  {
    name: "Professional",
    price: "$49",
    duration: "1 year",
    cardSize: "scale-105",
    cardColor: "bg-[#25d366]",
    textColor: "text-white",
    buttonBg: "bg-black",
    buttonTextColor: "text-white",
    recommended: true, 
    benefits: [
      "All benefits of Pro Plan, plus:",
      "Extended tool access for 1 year.",
      "Dedicated account manager.",
      "Quarterly performance reviews."
    ]
  },
  {
    name: "Case Study",
    price: "$5",
    duration: "Single Use",
    benefits: [
      "Access to specialized tools.",
      "Limited-time tool access.",
      "Case studies library access.",
      "Upgrade option available."
    ]
  }
];

const Plans = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-[90px] px-4 py-16">
      <h1 className="text-center text-4xl font-bold mb-8 text-[#25d366]">Choose Your Plan</h1>
      <p className="text-center text-lg text-gray-600">Explore our subscription plans tailored to meet your needs. <br />Choose the plan that best fits your requirements and start your journey with us today.</p>
      <div className="py-[4rem]">
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6 justify-center items-center'>
          {subscriptionPlans.map((plan, index) => (
            <motion.div key={index} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative w-[390px] lg:w-full shadow-xl flex flex-col p-4 border rounded-lg my-3 hover:scale-105 duration-300 ${plan.cardColor} ${plan.cardSize}`}>
              {plan.recommended && (
                <div className="w-[150px] h-[150px] absolute top-0 left-0 overflow-hidden">
                  <span className="absolute p-1 right-0 top-10 w-[200px] bg-black text-white text-center uppercase text-sm rotate-[-45deg] shadow-md">Recommended</span>
                  </div>
              )}
              <h1 className="text-center font-bold text-2xl py-3">{plan.name}</h1>
              <h2 className={`text-center text-5xl font-bold text-[#25d366] ${plan.textColor}`}>{plan.price}</h2>
              <div className="text-center font-medium mt-2"> 
                <p className="py-2 mx-8 mb-2 font-bold">({plan.duration})</p>
                {plan.models && <p className="py-2 border-b mx-8">{plan.models}</p>}
              </div>
              <div className="text-center">
                <ul className="text-md">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="text-gray-600 mb-4">{benefit}</li>
                  ))}
                </ul>
              </div>
              <button className={`bg-[#25d366] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ${plan.buttonTextColor} ${plan.buttonBg}`}>Order Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Plans;
