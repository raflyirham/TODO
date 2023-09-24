type Props = {
  id: number;
  activity: string;
  category: string;
  description: string;
  status: string;
  onChange: (id: number, e: any) => void;
  onClick: (id: number) => void;
};

export default function Todo({
  id,
  activity,
  category,
  description,
  status,
  onChange,
  onClick,
}: Props) {
  return (
    <div className="flex flex-col w-[24%] bg-[#272343] rounded p-6 max-sm:w-[100%] max-md:w-[100%] max-lg:w-[100%] max-xl:w-[48.9%]">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-[#fffffe] text-lg">{activity}</h3>

        <select
          name="type"
          onChange={(e) => onChange(id, e)}
          defaultValue={status}
          className="bg-[#bae8e8] rounded-full px-3 py-2 font-bold text-sm text-[#272343]"
        >
          <option value="incomplete">Incomplete</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <p className="text-[#fffffe] mt-4">{description}</p>

      <div className="bg-[#bae8e8] rounded-full p-2 w-fit mt-3">
        <p className="text-sm text-[#272343]">{category}</p>
      </div>

      <button
        className="bg-[#ff0000] rounded-full p-2 w-fit mt-8 font-normal text-sm text-[#fff]"
        onClick={() => onClick(id)}
      >
        <p>Delete Task</p>
      </button>
    </div>
  );
}
