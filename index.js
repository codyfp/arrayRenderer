/**
 * When given javascript object of an array, returns a display of all properties and their values
 *
 * @format
 * @param {Object[]} obj - The object to be displayed
 */

export default function displayObject(obj) {
  // Assumes all objects in array have same properties
  // Get all properties
  var columnTitles = Object.keys(obj[0]);
  const Header = () => (
    <thead>
      <tr>
        {columnTitles.map((key) => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    </thead>
  );

  return (
    <div>
      <Header />
      <tbody>
        {obj.map((row) => (
          <tr key={row.id}>
            {columnTitles.map((key) => {
              if (typeof row[key] === "object") {
                return (
                  <td key={key}>
                    <pre>{JSON.stringify(row[key], null, 2)}</pre>
                  </td>
                );
              }
              return <td key={key}>{row[key]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </div>
  );
}
