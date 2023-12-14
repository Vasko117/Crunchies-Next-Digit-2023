"use client";
import { use, useState, useContext } from "react";
import { GlobalContext } from "../context/page";

export default function cart() {
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const { user } = useContext(GlobalContext);
  const [items, setItems] = useState(user.itemList);
  console.log(user);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const data = [cardholderName, cardNumber, postalcode, city, adress];
    const response = fetch("http://localhost:8008/user/cart", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-[#FFD600] to-[#ff5100]  inset-0 z-[-10] absolute overflow-hidden">
      <div className="flex justify-center flex-col lg:flex-row lg:items-start sm:items-center md:items-center mt-[12vh]">
        <form onSubmit={handlePaymentSubmit}>
          <div className="flex-col">
            <div className="bg-opacity-50 mr-[5vh]">
              <div className="w-[30vw]  lg:w-[100%] bg-opacity-50 bg-yellow-50 rounded-[25px]">
                <div className="text-slate-50 text-3xl text-left font-bold font-Rubik ml-[3vw] pt-[1vh] border-b-2 border-white mr-[5vh]">
                  Personal Information
                </div>
                <div className=" flex-col ml-[2.4vw] mt-[1vw] pr-[2vw] pb-[2vh]">
                  <input
                    placeholder="First Name"
                    className="text-clip w-full   text-slate-50 text-xl text-left font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] pl-[1vh] p-[1px] mb-[3vh] "
                  />
                  <div className="flex justify-between  md:flex-row gap-4 ">
                    <input
                      placeholder="Email"
                      className="text-slate-50 text-xl text font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] w-full md:w-1/2 pl-[1vh] p-[1px] "
                    />
                    <input
                      placeholder="Phone Number"
                      className="text-slate-50 text-xl text-left font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] w-full  pl-[1vh] p-[1px] pr-[1vh] "
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[4vh] bg-opacity-50 mr-[5vh]">
              <div className="w-[30vw] lg:w-[100%] bg-opacity-50 bg-yellow-50 rounded-[25px] pb-5">
                <div className="  text-slate-50 font-bold text-3xl text-left   font-Rubik ml-10 pt-3 border-b-2 border-white mr-14">
                  Shipping Adress
                </div>
                <div className=" ml-10 mt-5 pr-10">
                  <div className="flex justify-between">
                    <input
                      placeholder="Adress"
                      className=" text-clip w-full  text-slate-50 text-xl text-left font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] mr-10 pl-[1vh] p-[1px]"
                    />
                    <input
                      placeholder="Postal Code"
                      className="text-clip w-full text-slate-50 text-xl text-left font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] pl-[1vh] p-[1px]"
                    />
                  </div>
                  <div className="flex flex-row mt-10">
                    <input
                      placeholder="City"
                      className=" w-1/2 text-slate-50 text-xl text  font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] mr-16 pl-[1vh] p-[1px]"
                    />
                    <input
                      placeholder="Country"
                      className=" w-1/2 text-slate-50 text-xl text-left   font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] pl-[1vh] p-[1px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[4vh] bg-opacity-50 mr-[5vh]">
              <div className="w-[30vw] lg:w-[100%]  bg-opacity-50 bg-yellow-50 rounded-[25px] pb-5">
                <div className="  text-slate-50 font-bold text-3xl text-left   font-Rubik ml-10 pt-3 border-b-2 border-white mr-14">
                  Payment Methods
                </div>
                <div className=" ml-10 mt-5 pr-10">
                  <div className="flex-col">
                    <input
                      placeholder="Cardholder Name"
                      className="mb-2 text-clip w-full text-slate-50 text-xl text-left font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] mr-10 pl-[1vh] p-[1px]"
                    />
                    <input
                      placeholder="Card Number"
                      className="text-clip w-full text-slate-50 text-xl text-left font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] mr-10 pl-[1vh] p-[1px]"
                    />
                  </div>
                  <div className="flex justify-between mt-10">
                    <div className="flex justify-normal">
                      <input
                        placeholder="EXP Date"
                        className=" w-1/4 text-slate-50 text-xl text  font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] mr-16 pl-[1vh] p-[1px]"
                      />
                      <input
                        placeholder="CVC"
                        className=" w-1/4 text-slate-50 text-xl text-left   font-Rubik bg-amber-800 bg-opacity-25 rounded-[25px] pl-[1vh] p-[1px]"
                      />
                    </div>
                    <button className=" font-bold text-clip  w-3/12 text-slate-50 text-xl text-center font-Rubik bg-red-600 rounded-[25px]">
                      Add Payment <br></br> information
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="">
          <div className="w-[45vw]   bg-opacity-50 bg-yellow-50 rounded-[25px]">
            <div className="  text-slate-50 font-bold text-3xl text-left  font-Rubik ml-10 pt-3 border-b-2 border-white mr-14">
              Your Delights
            </div>

            <div className="text-slate-50 font-bold text-3xl text-left h-[16vh] font-Rubik ml-10 pt-3 border-b-2 border-white mr-14">
              {items.map((item) => (
                <div>{item.name}</div>
              ))}
            </div>
            <div className="text-slate-50 font-bold text-3xl text-left h-[16vh] font-Rubik ml-10 pt-3 border-b-2 border-white mr-14">
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
            <div className="text-slate-50 font-bold text-3xl text-left h-40 font-Rubik  pt-3 mr-14">
              <div className="flex justify-between ml-10">
                <h4>Total:</h4>
                <p>0.00$</p>
              </div>
              <div className="flex justify-center">
                <button className="  text-clip w-max text-slate-50 text-xl text-center font-Rubik bg-red-600 rounded-[25px]  p-2  mt-8 ">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
