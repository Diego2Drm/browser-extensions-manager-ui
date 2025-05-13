import { useDispatch } from "react-redux";
import { isActiveExtencion, removeExtension } from "../../features/card/cardSlide";
import { CardsDeleted } from "./CardsDeleted";

const Cards = ({ filteredData }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <section className="mt-5 md:grid-cols-3 md:grid md:gap-5">
        {
          filteredData.map((item, i) => (
            <div key={i} className="bg-Neutral-0 my-5 p-3 rounded-lg">
              <div className="flex gap-3 items-start">
                <img src={item.logo} alt={item.name} />
                <p className="flex flex-col pr-10">
                  <span className="font-sans text-lg text-Neutral-900 font-bold">{item.name}</span>
                  <span className="leading-5 text-Neutral-600">{item.description}</span>
                </p>
              </div>
              <div className="flex justify-between items-center mt-5 lg:mt-10">
                <button className="border-Neutral-300 border-2 px-2 py-1 rounded-3xl text-xs text-Neutral-900 font-semibold font-sans cursor-pointer"
                  onClick={() => dispatch(removeExtension(item.name))}
                >
                  Remove
                </button>
                <label className="rounded-3xl w-10 h-5 relative flex items-center justify-cen*ter cursor-pointer">
                  <input type="checkbox" className="appearance-none"
                    checked={item.isActive ? true : false}
                    onChange={() => dispatch(isActiveExtencion(item.name))}
                  />
                  <span className="absolute left-1 w-3 h-3 rounded-full z-20 bg-white transition ease-in-out duration-500"></span>
                  <b className="absolute inset-0 bg-Neutral-300 rounded-3xl transition ease-in-out duration-500"></b>
                </label>
              </div>
            </div>
          ))
        }
      </section>
      <CardsDeleted />
    </div>
  )
}

export { Cards };