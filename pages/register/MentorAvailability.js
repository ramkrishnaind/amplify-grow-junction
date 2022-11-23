import React from "react";

const MentorAvailability = () => {
  return (
    <>
      <form>
        <div className="mt-20 px-4">
          <div className="flex w-auto">
            {/* 01*/}
            <div className="flex justify-start w-auto px-4">
              <div className="flex flex-row py-3">
                <img
                  src="/images/leftArrow.png"
                  alt=""
                  className="w-4 h-4 mt-1"
                ></img>
                <span className="text-base tex-black ml-4">Go back</span>
              </div>

              {/* 01*/}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center  items-center mt-5 px-10 w-full">
          <img src="/images/studentPD1.png" alt="" className="w-10 h-10"></img>
          <img
            src="/images/studentProfessionalDetail.png"
            alt=""
            className="w-14"
          ></img>
          <img src="/images/studentPD1.png" alt="" className="w-10 h-10"></img>
          <img
            src="/images/studentProfessionalDetail.png"
            alt=""
            className="w-14"
          ></img>
          <img src="/images/availability03.png" alt="" className="w-14 h-14"></img>
          <img
            src="/images/studentProfessionalDetail.png"
            alt=""
            className="w-14"
          ></img>
          <img src="/images/availability04.png" alt="" className="w-10 h-10"></img>
        </div>

        <div></div>

        <div className="flex flex-row justify-center px-5 mt-10">
          <div className="flex flex-col tracking-wide text-black ml-4 w-5/6 md:w-auto lg:w-auto">
            <div className="leading-8 text-2xl font-semibold">
              Let your audience know your availability
            </div>
            <p className="text-xs mt-10">
              Leting your audience know your availability will help them connect
              or opt for your service at their convenience, you can edit it
              multiple time later
            </p>

            <div className="flex flex-row justify-start mt-10">
              <div className="text-base font-medium">
                Select days you’ll be available
              </div>

              <div className="flex ml-10 justify-center items-center">
                <input
                  id="availability"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="availability"
                  className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  I’m available same time everyday
                </label>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex flex-col md:flex-row lg:flex-row justify-start mt-10 ">
              <div className="flex justify-start items-start w-40">
                  <input
                    id="day"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="day"
                    className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Sunday
                  </label>
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="startTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>

                  <div className="ml-5 ">
                    <select
                      id="startTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center items-center ml-3 text-sm font-normal text-gray-900 dark:text-gray-300 w-20">
                  to
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="endTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>
                  <div className="ml-5 ">
                    <select
                      id="endTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Monday */}
              <div className="flex flex-col md:flex-row lg:flex-row justify-start mt-10 ">
              <div className="flex justify-start items-start w-40">
                  <input
                    id="day"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="day"
                    className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Monday
                  </label>
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="startTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>

                  <div className="ml-5 ">
                    <select
                      id="startTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center items-center ml-3 text-sm font-normal text-gray-900 dark:text-gray-300 w-20">
                  to
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="endTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>
                  <div className="ml-5 ">
                    <select
                      id="endTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

               {/* Tuesday */}
               <div className="flex flex-col md:flex-row lg:flex-row justify-start mt-10 ">
               <div className="flex justify-start items-start w-40">
                  <input
                    id="day"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="day"
                    className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Tuesday
                  </label>
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="startTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>

                  <div className="ml-5 ">
                    <select
                      id="startTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center items-center ml-3 text-sm font-normal text-gray-900 dark:text-gray-300 w-20">
                  to
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="endTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>
                  <div className="ml-5 ">
                    <select
                      id="endTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

                {/* Wednesday */}
              <div className="flex flex-col md:flex-row lg:flex-row justify-start mt-10 ">
              <div className="flex justify-start items-start w-40">
                  <input
                    id="day"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="day"
                    className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Wednesday
                  </label>
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="startTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>

                  <div className="ml-5 ">
                    <select
                      id="startTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center items-center ml-3 text-sm font-normal text-gray-900 dark:text-gray-300 w-20">
                  to
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="endTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>
                  <div className="ml-5 ">
                    <select
                      id="endTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

                 {/* Thursday */}
              <div className="flex flex-col md:flex-row lg:flex-row justify-start mt-10 ">
              <div className="flex justify-start items-start w-40">
                  <input
                    id="day"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="day"
                    className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Thursday
                  </label>
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="startTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>

                  <div className="ml-5 ">
                    <select
                      id="startTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center items-center ml-3 text-sm font-normal text-gray-900 dark:text-gray-300 w-20">
                  to
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="endTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>
                  <div className="ml-5 ">
                    <select
                      id="endTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

                 {/* Friday */}
                 <div className="flex flex-col md:flex-row lg:flex-row justify-start mt-10 ">
                 <div className="flex justify-start items-start w-40">
                  <input
                    id="day"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="day"
                    className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Friday
                  </label>
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="startTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>

                  <div className="ml-5 ">
                    <select
                      id="startTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center items-center ml-3 text-sm font-normal text-gray-900 dark:text-gray-300 w-20">
                  to
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="endTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>
                  <div className="ml-5 ">
                    <select
                      id="endTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>


                 {/* Saturday */}
              <div className="flex flex-col md:flex-row lg:flex-row justify-start mt-10 ">
              <div className="flex justify-start items-start w-40">
                  <input
                    id="day"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="day"
                    className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Saturday
                  </label>
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="startTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>

                  <div className="ml-5 ">
                    <select
                      id="startTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center items-center ml-3 text-sm font-normal text-gray-900 dark:text-gray-300 w-20">
                  to
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="endTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>
                  <div className="ml-5 ">
                    <select
                      id="endTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

                 {/* Everyday */}
                 <div className="flex flex-col md:flex-row lg:flex-row justify-start mt-10 ">
                <div className="flex justify-start items-start w-40">
                  <input
                    id="day"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="day"
                    className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Everyday
                  </label>
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="startTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>

                  <div className="ml-5 ">
                    <select
                      id="startTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center items-center ml-3 text-sm font-normal text-gray-900 dark:text-gray-300 w-20">
                  to
                </div>
                <div className="flex flex-row justify-center ml-2">
                  <select
                    id="endTime"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>
                  <div className="ml-5 ">
                    <select
                      id="endTimeAP"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="AM" selected>
                        AM
                      </option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>


            </div>

            <div className="flex flex-row justify-center mt-10 ">
              <button className="flex justify-center items-center bg-black hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full w-40">
                <span className="ml-3 text-sm">Previous</span>
              </button>

              <button className="flex justify-center items-center ml-10 bg-amber-500 hover:bg-blue-700 text-white font-bold  py-2 px-6 rounded-full w-40">
                <span className="ml-3 text-sm">Continue</span>
              </button>
            </div>
          </div>
        </div>

        {/* 02 */}
      </form>
    </>
  );
};

export default MentorAvailability;
