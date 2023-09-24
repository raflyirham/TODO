type Props = {
  id: number;
  activity: string;
  category: string;
  description: string;
  status: string;
  onChange: (id: number, e: any) => void;
};

export default function Todo({
  id,
  activity,
  category,
  description,
  status,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col w-[24%] bg-[#272343] rounded p-6">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-[#fffffe] text-lg">{activity}</h3>

        <select
          name="type"
          onChange={(e) => onChange(id, e)}
          defaultValue={status}
        >
          <option value="incomplete">Incomplete</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>

        {/* {status === "incomplete" ? (
          <select
            name="type"
            id="type"
            onChange={(e) => onChange(id, e)}
            defaultValue={status}
          >
            <option value="incomplete">Incomplete</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        ) : status === "ongoing" ? (
          <select
            name="type"
            id="type"
            onChange={(e) => onChange(id, e)}
            defaultValue={status}
          >
            <option value="incomplete">Incomplete</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        ) : (
          <select
            name="type"
            id="type"
            onChange={(e) => onChange(id, e)}
            defaultValue={status}
          >
            <option value="incomplete">Incomplete</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        )} */}
      </div>
      <p className="text-[#fffffe] mt-4">{description}</p>

      <div className="bg-[#bae8e8] rounded-full p-2 w-fit mt-3">
        <p className="text-sm text-[#272343]">{category}</p>
      </div>
    </div>
  );
}
