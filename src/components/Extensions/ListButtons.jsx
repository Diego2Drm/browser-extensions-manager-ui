import { useDispatch } from "react-redux";
import { setAllExtensions } from "../../features/card/cardSlide";

const ListButtons = ({filter, setFilter }) => {
  const dispatch = useDispatch();

  const ButtonsList = [
    {
      list: "All",
      onclick: () => {dispatch(setAllExtensions()); setFilter("All")}
    },
    {
      list: "Active",
      onclick: () => setFilter("Active"),
    },
    {
      list: "Inactive",
      onclick: () => setFilter("Inactive"),
    },
  ]

  return (
    <div className="flex justify-around w-full lg:justify-end lg:gap-3">
      {
        ButtonsList.map((button, i) => (
          <button key={i} 
          className={`${ filter === button.list ?'bg-Red-700 text-Neutral-0' :'bg-Neutral-0 text-Neutral-900'}  text-lg px-4 rounded-full cursor-pointer`}
            onClick={button.onclick}
          >
            {button.list}
          </button>
        ))
      }
    </div>
  )
}

export { ListButtons };