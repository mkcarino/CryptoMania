import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import JSONDATA from "../Top200List.json";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebaseClient";

export default function AddCoin() {
  const { user } = useAuth();
  const [coinName, setcoinName] = useState("");
  const [coinQuantity, setcoinQuantity] = useState("");
  const [coinPrice, setcoinPrice] = useState("");
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [searchSet, setSearchSet] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [idCoin, setIdCoin] = useState("");

  const inputNameHandler = (e) => {
    setcoinName(e.target.value);
    setSearchDisplay(true);
  };
  const setNameList = (name, id) => {
    setcoinName(name);
    setIdCoin(id);
    setSearchDisplay(false);
    setSearchSet(true);
  };

  function addCoinToFirebase(e) {
    e.preventDefault();
    if (!searchSet) {
      console.log("non ho aggiunto nulla perchè non hai scelto");
      return;
    }
    const totalValue = coinPrice * coinQuantity;
    db.collection(user.uid)
      .doc("portfolio")
      .collection("transactions")
      .add({
        quantityCoin: +coinQuantity,
        priceCoin: +coinPrice,
        totalValue: totalValue,
        nameCoin: coinName,
        idCoin: idCoin,
      });
    setcoinName("");
    setcoinPrice("");
    setcoinQuantity("");
    setSearchSet(false);
    setIsOpen(false);
    setIdCoin("");
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-lg font-medium text-white bg-green-500 rounded-md lg:text-xl hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Add Transaction
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center bg-black bg-opacity-50">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="pb-2 text-2xl font-semibold leading-6 text-green-500"
                >
                  Add Transaction
                </Dialog.Title>
                {/* Add */}
                <div className="flex justify-end ">
                  <div className="w-full p-2 rounded-lg">
                    <form
                      className="flex flex-col justify-end"
                      onSubmit={addCoinToFirebase}
                    >
                      <p className="pt-2 font-semibold text-blue-500">Coin</p>
                      <input
                        
                        type="text"
                        className="pb-2 border border-blue-400 rounded-md focus:border-blue-300"
                        onChange={inputNameHandler}
                        value={coinName}
                        required
                      ></input>
                      {searchDisplay && (
                        <div className="overflow-scroll overflow-x-hidden bg-blue-100 max-h-32 rounded-b-md">
                          {JSONDATA.filter((val) => {
                            if (coinName == "") {
                              return val;
                            } else if (
                              val.name
                                .toLowerCase()
                                .includes(coinName.toLowerCase())
                            ) {
                              return val;
                            }
                          }).map((val, key) => {
                            return (
                              <div
                                className="flex items-center"
                                key={key}
                                onClick={() => setNameList(val.name, val.id)}
                              >
                                <p className="py-1">{val.name}</p>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <p className="pt-2 font-semibold text-blue-500 ">
                        Quantity
                      </p>
                      <input
                        value={coinQuantity}
 
                        type="text"
                        className="border border-blue-400 rounded-md focus:border-blue-300"
                        pattern="^\d*(\.)?(\d{0,8})?$"
                        title="Use only number and . to separete the decimals"
                        onChange={(e) => {
                          setcoinQuantity(e.target.value);
                        }}
                        required
                      ></input>

                      <p className="pt-2 font-semibold text-blue-500">Price</p>
                      <input
                        value={coinPrice}
                        type="text"
                        className="border border-blue-400 rounded-md focus:border-blue-300"
                        pattern="^\d*(\.)?(\d{0,5})?$"
                        title="Use only number and . to separete the decimals"
                        onChange={(e) => {
                          setcoinPrice(e.target.value);
                        }}
                        required
                      ></input>
                      <button
                        type="submit"
                        className="relative flex justify-center px-4 py-4 mt-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md group hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={closeModal}
                        className="relative flex justify-center px-4 py-4 mt-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md group hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
