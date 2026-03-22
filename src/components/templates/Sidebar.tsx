// todo . add type for getting data from api
function Sidebar({ categories }) {
  //   console.log(data)
  return (
    <div className="mt-7.5 w-50">
      <h4>دسته ها</h4>
      <ul>
        {categories.data?.map((cat) => (
          <li key={cat._id} className="flex my-5">
            <img src={`${cat.icon}.svg`} alt="" />
            <p className="font-extralight ms-2.5 text-gray-400">{cat.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
