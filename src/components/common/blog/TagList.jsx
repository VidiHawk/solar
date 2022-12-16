const TagList = () => {
  const tagContent = [
    { id: 1, name: "Wind" },
    { id: 2, name: "Solar" },
    { id: 3, name: "Hydroelectric" },
    { id: 4, name: "Biofuel" },
    { id: 5, name: "Hydrogen" },
    { id: 6, name: "Biomass" },
    { id: 7, name: "Gas" },
  ];
  return (
    <ul className="tag_list">
      {tagContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href="#">{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
