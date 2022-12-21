const Categories = () => {
  const categorieContent = [
    { id: 1, name: "Wind", propertyNumber: "6" },
    { id: 2, name: "Solar", propertyNumber: "12" },
    { id: 3, name: "Hydro", propertyNumber: "8" },
    { id: 4, name: "Biofuel", propertyNumber: "26" },
    { id: 5, name: "Gas", propertyNumber: "89" },
  ];
  return (
    <ul className="list_details">
      {categorieContent.map((item) => (
        <li key={item.id}>
          <a href="#">
            <i className="fa fa-caret-right mr10"></i>
            {item.name}{" "}
            <span className="float-end">{item.propertyNumber} plants</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
