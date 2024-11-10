import React, { useState } from "react";
import { AiFillAudio } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Button, MovingBorder } from "../components/ui/moving-border";

const FixitAI = () => {
  const [selectedComponent, setSelectedComponent] = useState("AudioBot");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "AudioBot":
        return <AudioBot />;
      case "ChatBot":
        return <ChatBot />;
      case "AudioIntelligence":
        return <AudioIntelligence />;
      default:
        return null;
    }
  };

  const buttonStyle = (component) =>{
    return `card border-2 flex gap-2 items-center justify-center flex-1 mx-1 rounded-lg ${
      selectedComponent === component
        ? "border-blue-500 bg-gray-800 animate-borderChange"
        : "border-gray-800 bg-black hover:bg-gray-700"
    }`;
  }

  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center justify-center p-4 text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[1.5rem] md:text-[2.5rem] font-bold">
          Conversational Intelligence with FixitAI.
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Transforming communication through innovation. Uncover the ease of
          enhancing your interactions.
        </p>
      </div>
      {/* Buttons */}
      <div className="flex space-x-4 mb-8 w-3/4">
        <select
          className="block md:hidden w-full py-3 px-4 bg-blue-500 text-white rounded text-lg"
          onChange={(e) => setSelectedComponent(e.target.value)}
        >
          <option value="AudioBot">Audio Bot</option>
          <option value="ChatBot">Chat Bot</option>
          <option value="AudioIntelligence">Audio Intelligence</option>
        </select>
        <div className="hidden gap-2 md:flex justify-between w-full">
          <Button
            onClick={() => setSelectedComponent("AudioBot")}
            className={buttonStyle("AudioBot")}
          >
            <AiFillAudio />
            <div>Audio Bot</div>
          </Button>
          <Button
            onClick={() => setSelectedComponent("ChatBot")}
            className={buttonStyle("ChatBot")}
          >
            <BsChatLeftText />
            <div>Chat Bot</div>
          </Button>
          <Button
            onClick={() => setSelectedComponent("AudioIntelligence")}
            className={buttonStyle("AudioIntelligence")}
          >
            <LuBrainCircuit />
            <div>Audio Intelligence</div>
          </Button>
        </div>
      </div>

      {/* Bottom Section */}
      {renderComponent()}
    </div>
  );
};

const AudioBot = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-[80vh] md:h-[50vh] w-3/4 border-4 border-[#1B2029] rounded-md">
      <div className="bg-black border-b-4 md:border-b-0 md:border-r-4 border-[#1B2029] relative h-full md:w-[40%] w-full p-8 flex flex-col items-center justify-center space-y-4">
        <select className="bg-black absolute w-[20vw] md:w-[10vw] right-10 top-10 text-white rounded-md p-2 border border-gray-600">
          <option>English</option>
          <option>Arabic</option>
        </select>
        <div className="bg-gray-800 border border-[#FFFFF7] aspect-square rounded-full p-6">
          <AiFillAudio className="w-10 h-10" />
        </div>
        <p className="text-white">Click on the mic to start.</p>
      </div>
      <div className="w-full md:w-3/4 flex items-center justify-center h-full bg-[#0A0A0A] text-gray-400 p-4 md:p-0">
        <p>The Mic is quiet. Let's start a conversation!</p>
      </div>
    </div>
  );
};

const ChatBot = () => {
  return (
    <div className="flex flex-col md:flex-row h-[80vh] md:h-[50vh] w-3/4 border-4 border-[#1B2029] rounded-lg bg-black">
      {/* Left Section */}
      <div className="flex flex-col justify-between w-full md:w-[40%] p-4 space-y-4 h-full border-b md:border-b-0 md:border-r border-gray-700">
        <textarea
          className="w-full h-40 p-2 text-gray-300 bg-black border border-[#1B2029] rounded-md resize-none"
          placeholder="Let's start!"
        />
        <button className="px-4 py-2 mt-4 text-white bg-[#525253] rounded-md hover:bg-[#2e2e2e]">
          Chat
        </button>
        <div>
          <p className="text-gray-400">Call Center : Customer Support</p>
          <div className="flex items-center mt-2 space-x-2">
            <AiOutlinePlayCircle className="text-gray-400 w-6 h-6" />
            <div className="flex-grow h-8 bg-gray-600 rounded-md overflow-hidden">
              {/* Mock audio waveform */}
              <div className="bg-gray-500 w-full h-full"></div>
            </div>
            <span className="text-gray-400">1:44</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex h-full items-center justify-center w-full md:w-3/4 bg-[#0A0A0A] text-gray-400 p-4">
        <p className="text-lg">Let's start a conversation!</p>
      </div>
    </div>
  );
};

const AudioIntelligence = () => {
    const [activeButton, setActiveButton] = useState("Summarization");

    const buttonClasses = (buttonName) =>
      `w-full px-4 py-2 text-center rounded-full 
     ${
       activeButton === buttonName
         ? "bg-[#525253] text-white"
         : "bg-[#0A0A0A] border border-gray-600"
     }
     hover:bg-[#2e2e2e]`;
  return (
    <div className="flex flex-col md:flex-row w-3/4 h-[90vh] md:h-[50vh] border border-gray-700 rounded-lg bg-black text-gray-400">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-[40%] p-6 border-b md:border-b-0 md:border-r border-gray-700 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="text-lg">Call Center : Customer Support</p>
          <select className="bg-black text-white rounded-md p-2 border border-gray-600">
            <option>English</option>
            <option>Arabic</option>
          </select>
        </div>

        {/* Audio Player */}
        <div className="flex items-center space-x-3 pb-4 border-b-2 border-[#1B2029]">
          <AiOutlinePlayCircle className="text-gray-400 w-8 h-8" />
          <div className="flex-grow h-10 bg-gray-600 rounded-md overflow-hidden">
            <div className="bg-gray-500 w-full h-full"></div>
          </div>
          <span className="text-gray-400">1:44</span>
        </div>

        {/* Analysis Buttons */}
        <div className="space-y-3">
          <button
            className={buttonClasses("Summarization")}
            onClick={() => setActiveButton("Summarization")}
          >
            Summarization
          </button>
          <button
            className={buttonClasses("Sentiment Analysis")}
            onClick={() => setActiveButton("Sentiment Analysis")}
          >
            Sentiment Analysis
          </button>
          <button
            className={buttonClasses("Intent Detection")}
            onClick={() => setActiveButton("Intent Detection")}
          >
            Intent Detection
          </button>
          <button
            className={buttonClasses("Topic Detection")}
            onClick={() => setActiveButton("Topic Detection")}
          >
            Topic Detection
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-[60%] p-6 bg-[#0A0A0A] h-[40vh] md:h-auto">
        <p className="text-center text-xl pb-6 w-3/4">
          Amplify audio Insights. <span className="text-white">Analyze</span>{" "}
          and <span className="text-white">unlock insights</span> with{" "}
          <span className="text-white">audio intelligence.</span>
        </p>
        <button className=" w-[17vw] h-[6vh] rounded-md border text-grey-700 border-white">
          Start Analysis
        </button>
      </div>
    </div>
  );
};

export default FixitAI;