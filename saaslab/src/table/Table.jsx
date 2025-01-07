import React from "react";
export const Table = ({data}) => {
  return (
    <div
  style={{
    width: "100%",
    border: "1px solid black",
    background: "#ffffff",
    padding: "10px",
  }}
>
  <div
    style={{
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "space-between", 
    }}
  >
    {data.map((item, index) => {
      return (
        <div
          key={index}
          style={{
            flex: "1 1 calc(25% - 10px)", 
            maxWidth: "calc(25% - 10px)", 
            padding: "10px", 
            boxSizing: "border-box", 
          }}
        >
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>s.no</th>
                <th>Percentage funded</th>
                <th>Amount pledged</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{textAlign:"center"}}>
                <td>{item["s.no"]}</td>
                <td>{item["percentage.funded"]}</td>
                <td>{item["amt.pledged"]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    })}
  </div>

</div>

  );
};
