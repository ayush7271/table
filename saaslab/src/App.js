import PaginatedList from "./table/PaginatedList";
import data from "./frontend-assignment.json";
function App() {
  const apiUrl =
    "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      const responseData = JSON.parse(xhr.responseText);
      console.log("Success:", responseData);
    } else {
      console.error("Error:", xhr.status, xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error("Request failed.");
  };
  xhr.send();
  return (
    <div className="App">
      <PaginatedList data={data} />;
    </div>
  );
}

export default App;
