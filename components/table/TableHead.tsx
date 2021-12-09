const TableHead = ({ ...props }) => {
  return (
    <>
      <thead>
        <tr>
          <th className=" bg-lightGreeny md:pl-5 border-b border-midGreen">
            <div className="py-3 text-sm">{props.header}</div>
          </th>
          <th className=" bg-lightGreeny md:pl-5 border-b  border-midGreen"></th>
          <th className="bg-lightGreeny md:pl-5 border-b border-midGreen"></th>
          <th className="bg-lightGreeny md:pl-5 border-b border-midGreen"></th>
        </tr>
      </thead>
    </>
  );
};

export default TableHead;