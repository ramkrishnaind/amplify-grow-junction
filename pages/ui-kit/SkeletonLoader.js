import React from "react";

const SkeletonLoader = () => {
  return (
    <div
      role="status"
      class="space-y-0 animate-pulse max-w-lg"
      style={{ display: "flex", flex: 1 }}
    >
      <div
        class="flex items-center space-x-2 w-full"
        // style={{ width: "100%" }}
      >
        <div class="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div class="h-8 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="h-8 bg-gray-300 rounded-full dark:bg-gray-600 w-135"></div>
        {/* <div class="h-8 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="h-8 bg-gray-300 rounded-full dark:bg-gray-600 w-35"></div> */}
      </div>
      <div class="flex items-center w-full space-x-2 ">
        <div class="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div class="h-8 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-8 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      {/* <div class="flex items-center w-full space-x-2 max-w-[400px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[480px]">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div> */}
      {/* <div class="flex items-center w-full space-x-2 max-w-[440px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[360px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div> */}
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default SkeletonLoader;
