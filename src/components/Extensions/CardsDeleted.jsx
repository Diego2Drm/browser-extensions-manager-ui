import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restoreExtension } from "../../features/card/cardSlide";

const CardsDeleted = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.data);
  const deletedItems = data.filter(item => item.isDeleted);
  return (
    <section>
      {deletedItems.length > 0 && (
        <div className="mt-5">
          <h2 className="text-xl font-bold text-Neutral-900">Extensions Removed</h2>
          <div className="flex gap-10 flex-wrap">
            {deletedItems.map((item) => (
              <div key={item.name} className="bg-Neutral-100 p-3 rounded-lg my-3 flex flex-col items-center">
                <p className="font-sans text-lg text-Neutral-700 font-bold">{item.name}</p>
                <button className="border-Neutral-500 border-2 px-2 py-1 rounded-3xl text-xs font-semibold cursor-pointer"
                  onClick={() => dispatch(restoreExtension(item.name))}
                >
                  Restaurar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>

  );
};

export { CardsDeleted };