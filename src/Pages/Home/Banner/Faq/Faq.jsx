import {
    BiDownArrow,
  } from "react-icons/bi";

  
const Faq = () => {
    return (
      <div>
                <h1 className="text-center md:text-3xl text-xl mt-8 w-4/12 mx-auto font-bold text-[#854D0E] border-y-4 py-4">FAQ SECTION</h1>
        <div className="flex justify-center items-center flex-col py-10 my-10 rounded-[100px]">
        {/* title  */}
        {/* all questions  */}
        <div className="mx-auto max-w-4xl"></div>
        <div className="mx-auto max-w-4xl">
          {/* 1st question  */}
          <div className="collapse  card glass shadow-xl m-5">
            <input type="checkbox" />
            <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-[#854D0E]">
            What is the Purpose of Polling and Surveys?? <BiDownArrow className="ml-5" />
            </div>
            <div className="collapse-content bg-base-300">
              <p className="text-justify pt-5 text-accent-content">
              Polling and surveys aim to gather opinions, preferences, or data from a specific group of people. They're used to understand public sentiment, consumer behavior, or to gauge opinions on various topics.</p>
            </div>
          </div>
  
          {/* 2nd question */}
          <div className="collapse  card glass shadow-xl m-5">
            <input type="checkbox" />
            <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-[#854D0E]">
            How Are Polls and Surveys Conducted?? <BiDownArrow className="ml-5" />
            </div>
            <div className="collapse-content bg-base-300">
              <p className="text-justify pt-5 text-accent-content">
              Polls and surveys can be conducted through various methods such as online questionnaires, phone calls, face-to-face interviews, or mailed questionnaires. They use carefully crafted questions and sampling methods to gather data.
              </p>
            </div>
          </div>
  
          {/* 3rd question */}
          <div className="collapse  card glass shadow-xl m-5">
            <input type="checkbox" />
            <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-[#854D0E]">
            What Role Does Sampling Play in Polls and Surveys?? <BiDownArrow className="ml-5" />
            </div>
            <div className="collapse-content bg-base-300">
              <p className="text-justify pt-5 text-accent-content">
              Sampling involves selecting a subset of individuals from a larger population for survey purposes. It's crucial for ensuring representativeness. Random, stratified, or quota sampling methods are often used to create a sample that mirrors the population's diversity.
              </p>
            </div>
          </div>
  
          {/* 4th question  */}
          <div className="collapse  card glass shadow-xl m-5">
            <input type="checkbox" />
            <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-[#854D0E]">
            How Reliable Are Polls and Surveys?? <BiDownArrow className="ml-5" />
            </div>
            <div className="collapse-content bg-base-300">
              <p className="text-justify pt-5 text-accent-content">
              The reliability of polls and surveys depends on various factors such as sample size, the methodology used, the wording of questions, and the representativeness of the sample. Well-designed surveys with large, diverse samples and carefully constructed questions tend to be more reliable. However, biases or inaccuracies can still occur. 
              </p>
            </div>
          </div>
          {/* 5th question  */}
          <div className="collapse  card glass shadow-xl m-5">
            <input type="checkbox" />
            <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-[#854D0E]">
            What Is the Margin of Error in Polling and Survey Results?? <BiDownArrow className="ml-5" />
            </div>
            <div className="collapse-content bg-base-300">
              <p className="text-justify pt-5 text-accent-content">
              The margin of error indicates the possible range of deviation in survey results due to random sampling. It quantifies the accuracy level of the survey by specifying the potential discrepancy between the survey results and the entire population's views. Typically, a larger sample size leads to a smaller margin of error, resulting in more reliable findings. 
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Faq;