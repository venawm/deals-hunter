import React from "react";
import { Snippet } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

const DealsPage = () => {
  return (
    <div className=" py-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-8 text-left">
          <h1 className="text-3xl font-bold text-gray-900">
            Today{"'"}s Deals
          </h1>
          <p className="text-gray-600 mt-2">Curated deals for everyone</p>
          <p className="text-gray-600 mt-1">
            Get the best deals delivered to your inbox
          </p>
          <div className="flex gap-2 mt-6">
            <div className="flex w-1/2 flex-wrap md:flex-nowrap gap-4 ">
              <Input label="Email" type="email" />
            </div>
            <button className="bg-zinc-900 dark:bg-zinc-800 text-white rounded-xl px-4 hover:bg-gray-800 h-14">
              Subscribe
            </button>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DealCard
            proTag
            bgColor="bg-yellow-100"
            code="XMAS24"
            description="Access all AI models in one native Mac app"
            discount="25% OFF"
            link="#"
            tags="AI Tools +3"
            title="BoltAI"
          />
          <DealCard
            title="ShortLab"
            description="AI Video Editor for Short-Forms"
            discount="25% OFF"
            code="DEALHUNT"
            tags="AI Tools +2"
            link="#"
          />
          <DealCard
            title="BookmarkX"
            description="Organize your bookmarks easily"
            discount="75% OFF"
            code="LIFETIME"
            tags="Social Media +2"
            link="#"
          />
          <DealCard
            title="Xbase"
            description="Superfast X content generation with AI"
            discount="20% OFF"
            code=""
            tags="Social Media +4"
            link="#"
          />
          <DealCard
            title="DirectoryEasy"
            description="Next.js directory boilerplate"
            discount="29% OFF"
            code=""
            tags="Boilerplates +1"
            link="#"
          />
          <DealCard
            title="BuouAI"
            description="Next Starter Kit with ChatGPT"
            discount="78% OFF"
            code="BUOUNEXT"
            tags="AI Tools"
            link="#"
          />
        </div>
      </div>
    </div>
  );
};

const DealCard = ({
  title,
  description,
  discount,
  code,
  tags,
  link,
  proTag = false,
  bgColor = "bg-white",
}) => {
  return (
    <div className={`relative ${bgColor} rounded-lg shadow-md overflow-hidden`}>
      <div className="p-6">
        {/* Pro Badge */}
        {proTag && (
          <div className="absolute top-2 right-2 bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full">
            Pro
          </div>
        )}
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-xs text-gray-500 mb-2">{tags}</p>
        {/* Discount & Promo Code */}
        {code && (
          <div className="mb-4 text-sm text-gray-700">
            <Snippet hideSymbol className="py-0 text-xs" size="sm">
              npm install
            </Snippet>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-green-500 font-bold">{discount}</span>
          <a href={link} className="text-blue-500 hover:text-blue-700">
            Learn More
          </a>
        </div>
        {/* Like/Dislike Section */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2 text-gray-500 text-sm">
            <div className="flex items-center space-x-1">
              <span>👍</span>
              <span>0</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>👎</span>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
