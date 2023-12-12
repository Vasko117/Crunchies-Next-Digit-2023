export default function cart() {
  return (
    <div className=" min-h-screen overflow-auto bg-gradient-to-t from-[#FFD600] to-[#ff5100]  inset-0 z-[-10] flex justify-center absolute">
      <div className="flex-col">
        <div className="w-[749px] h-[215px] mt-48 bg-opacity-50 mr-10">
          <div className="w-[749px] h-[215px] bg-opacity-50 bg-yellow-50 rounded-[25px]">
            <div className=" text-gray-900 text-3xl text-left font-bold   font-Rubik ml-10 pt-3 border-b-2 border-black mr-14">
              Personal Information
            </div>
            <div className="w-[702px] h-[55px] ml-10 mt-5 pr-10">
              <input
                placeholder="First Name"
                className="left-[46px] text-clip w-full text-black text-xl text-left font-Rubik bg-black bg-opacity-25 rounded-[25px] p-2 pl-4"
              />
              <div className="flex flex-row mt-10">
                <input
                  placeholder="Email"
                  className=" w-1/2 text-gray-900 text-xl text   font-Rubik bg-black bg-opacity-25 rounded-[25px] mr-16 p-2 pl-4"
                />
                <input
                  placeholder="Phone Number"
                  className=" w-1/2 text-gray-900 text-xl text-left    font-Rubik bg-black bg-opacity-25 rounded-[25px] p-2 pl-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[749px] h-[215px] mt-12 bg-opacity-50 mr-10">
          <div className="w-[749px] h-[215px] bg-opacity-50 bg-yellow-50 rounded-[25px]">
            <div className="  text-gray-900 font-bold text-3xl text-left   font-Rubik ml-10 pt-3 border-b-2 border-black mr-14">
              Shipping Adress
            </div>
            <div className="w-[702px] h-[55px]  top-[175px] ml-10 mt-5 pr-10">
              <div className="flex justify-normal">
                <input
                  placeholder="Adress"
                  className="left-[46px] text-clip w-full text-black text-xl text-left font-Rubik bg-black bg-opacity-25 rounded-[25px] mr-10 p-2 pl-4"
                />
                <input
                  placeholder="Postal Code"
                  className="left-[46px] text-clip w-1/2 text-black text-xl text-left font-Rubik bg-black bg-opacity-25 rounded-[25px] p-2 pl-4"
                />
              </div>
              <div className="flex flex-row mt-10">
                <input
                  placeholder="City"
                  className=" w-1/2 text-gray-900 text-xl text  font-Rubik bg-black bg-opacity-25 rounded-[25px] mr-16 p-2 pl-4"
                />
                <input
                  placeholder="Country"
                  className=" w-1/2 text-gray-900 text-xl text-left   font-Rubik bg-black bg-opacity-25 rounded-[25px] p-2 pl-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[749px] h-[295px] mt-12 bg-opacity-50 mr-10">
          <div className="w-[749px] h-[295px] bg-opacity-50 bg-yellow-50 rounded-[25px]">
            <div className="  text-gray-900 font-bold text-3xl text-left   font-Rubik ml-10 pt-3 border-b-2 border-black mr-14">
              Payment Methods
            </div>
            <div className="w-[702px] h-[55px]  top-[175px] ml-10 mt-5 pr-10">
              <div className="flex-col">
                <div className="mb-2 text-clip w-full text-white text-xl text-left font-Rubik mr-10 p-2 pl-4">
                  <input type="radio" value="Cash On Delivery" />
                  <input type="radio" value="Credit or Debit" />
                </div>
                <input
                  placeholder="Cardholder Name"
                  className="mb-2 text-clip w-full text-white text-xl text-left font-Rubik bg-black bg-opacity-25 rounded-[25px] mr-10 p-2 pl-4"
                />
                <input
                  placeholder="Card Number"
                  className="text-clip w-full text-white text-xl text-left font-Rubik bg-black bg-opacity-25 rounded-[25px] mr-10 p-2 pl-4"
                />
              </div>
              <div className="flex flex-row mt-10">
                <input
                  placeholder="EXP Date"
                  className=" w-1/4 text-gray-900 text-xl text  font-Rubik bg-black bg-opacity-25 rounded-[25px] mr-16 p-2 pl-4"
                />
                <input
                  placeholder="CVC"
                  className=" w-1/4 text-gray-900 text-xl text-left   font-Rubik bg-black bg-opacity-25 rounded-[25px] p-2 pl-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[749px] h-[514px] mt-48 ml-">
        <div className="w-[749px] h-[514px] left-0 top-0  bg-opacity-50 bg-yellow-50 rounded-[25px]"></div>
      </div>
    </div>
  );
}
