//Update resources with title and respective url links
import React from "react";
import pdfIcon from "../pdfs/pdf.png";

const pdfs = [
  {
    title: "Test.pdf",
    url: "/sample.pdf"
  },
  {
    title: "Test.pdf",
    url: "/sample.pdf"
  },
  {
    title: "Test.pdf",
    url: "/sample.pdf"
  },
  {
    title: "Test.pdf",
    url: "/sample.pdf"
  },
  {
    title: "Test.pdf",
    url: "/sample.pdf"
  },
  {
    title: "Test.pdf",
    url: "/sample.pdf"
  }
];

const Resources = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-[90px] py-16">
      <h1 className="text-center text-4xl font-bold mb-8 text-[#25d366]">Resources</h1>
      <p className="text-center text-lg text-gray-600 mb-12">Explore a variety of tools that enable you to analyze data using Machine Learning without any coding required.</p>

      <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
        {pdfs.map((pdf, index) => (
          <div className="flex flex-col items-center justify-center w-[100px]" key={index}>
            <a href={pdf.url} target="_blank" rel="noreferrer">
              <img src={pdfIcon} alt="PDF Icon" className="w-20 h-20 " />
              <p className="text-center ">{pdf.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
