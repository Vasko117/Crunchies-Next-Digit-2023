export default function cart() {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-[#FFD600] to-[#ff5100]  inset-0 z-[-10] absolute">
      <div className="flex justify-center md:flex-col lg:flex-row lg:items-start sm:items-center md:items-center mt-[12vh]">
        <div className="flex-col">
          <div className="bg-opacity-50 mr-[5vh]">
            <div className="w-full md:w-[100%] lg:w-[98%] bg-opacity-50 bg-yellow-50 rounded-[25px]">
              <div className="text-slate-50 text-3xl text-left font-bold font-Rubik ml-[3vw] pt-[1vh] border-b-2 border-white mr-[5vh]">
                Personal Information
              </div>
              <div className="ml-[2.4vw] mt-[1vw] pr-[2vw]">
                <input
                  placeholder="First Name"
                  className="text-clip w-full md:w-full  text-slate-50 text-xl text-left font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] pl-[1vh] p-[1px] mb-[1vh] m-[5px]"
                />
                <div className="flex flex-col md:flex-row pb-[2vh]">
                  <input
                    placeholder="Email"
                    className="text-slate-50 text-xl text font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] w-full md:w-1/2 pl-[1vh] p-[1px] m-[5px]"
                  />
                  <input
                    placeholder="Phone Number"
                    className="text-slate-50 text-xl text-left font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] w-full  pl-[1vh] p-[1px] m-[5px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[4vh] bg-opacity-50 mr-[5vh]">
            <div className="w-[749px] h-[215px] bg-opacity-50 bg-yellow-50 rounded-[25px]">
              <div className="  text-slate-50 font-bold text-3xl text-left   font-Rubik ml-10 pt-3 border-b-2 border-white mr-14">
                Shipping Adress
              </div>
              <div className="w-[702px] h-[55px]  top-[175px] ml-10 mt-5 pr-10">
                <div className="flex justify-normal">
                  <input
                    placeholder="Adress"
                    className="left-[46px] text-clip w-full text-slate-50 text-xl text-left font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] mr-10 p-2 pl-4"
                  />
                  <input
                    placeholder="Postal Code"
                    className="left-[46px] text-clip w-1/2 text-slate-50 text-xl text-left font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] p-2 pl-4"
                  />
                </div>
                <div className="flex flex-row mt-10">
                  <input
                    placeholder="City"
                    className=" w-1/2 text-slate-50 text-xl text  font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] mr-16 p-2 pl-4"
                  />
                  <input
                    placeholder="Country"
                    className=" w-1/2 text-slate-50 text-xl text-left   font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] p-2 pl-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[4vh] bg-opacity-50 mr-[5vh]">
            <div className="w-[749px] h-[315px] bg-opacity-50 bg-yellow-50 rounded-[25px]">
              <div className="  text-slate-50 font-bold text-3xl text-left   font-Rubik ml-10 pt-3 border-b-2 border-white mr-14">
                Payment Methods
              </div>
              <div className="w-[702px] h-[55px]  top-[175px] ml-10 mt-5 pr-10">
                <div className="flex-col">
                  <div className="mb-2 text-clip w-full text-slate-50 text-xl text-left font-Rubik mr-10 p-2 pl-4">
                    <input type="radio" value="Cash On Delivery" />
                    <input type="radio" value="Credit or Debit" />
                  </div>
                  <input
                    placeholder="Cardholder Name"
                    className="mb-2 text-clip w-full text-slate-50 text-xl text-left font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] mr-10 p-2 pl-4"
                  />
                  <input
                    placeholder="Card Number"
                    className="text-clip w-full text-slate-50 text-xl text-left font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] mr-10 p-2 pl-4"
                  />
                </div>
                <div className="flex flex-row mt-10">
                  <input
                    placeholder="EXP Date"
                    className=" w-1/4 text-slate-50 text-xl text  font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] mr-16 p-2 pl-4"
                  />
                  <input
                    placeholder="CVC"
                    className=" w-1/4 text-slate-50 text-xl text-left   font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] p-2 pl-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-[70vh]  bg-opacity-50 bg-yellow-50 rounded-[25px]">
            <div className="  text-slate-50 font-bold text-3xl text-left  font-Rubik ml-10 pt-3 border-b-2 border-white mr-14">
              Payment Methods
            </div>

            <div className="text-slate-50 font-bold text-3xl text-left h-40 font-Rubik ml-10 pt-3 border-b-2 border-white mr-14"></div>
            <div className="text-slate-50 font-bold text-3xl text-left h-40 font-Rubik ml-10 pt-3 border-b-2 border-white mr-14">
              <div>
                <div className="flex justify-between">
                  <h4>Subtotal:</h4>
                  <p className="text-right">0.00$</p>
                </div>
                <div className="flex justify-between">
                  <h4>Discount:</h4>
                  <p>0.00$</p>
                </div>
                <div className="flex justify-between">
                  <h4>Shipping:</h4>
                  <p>0.00$</p>
                </div>
              </div>
            </div>
            <div className="text-slate-50 font-bold text-3xl text-left h-40 font-Rubik ml-10 pt-3 mr-14">
              <div className="flex justify-between">
                <h4>Total:</h4>
                <p>0.00$</p>
              </div>
              <button className=" left-[46px] text-clip w-1/4 text-slate-50 text-xl text-center font-Rubik bg-red-800 bg-opacity-75 rounded-[25px] mr-10 p-2 pl-4 mt-8 ml-60">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
