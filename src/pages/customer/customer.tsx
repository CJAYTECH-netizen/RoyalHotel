import { useState } from "react";

// Step 1: Define the type for each row
type TableRow = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
};

const customer = () => {
  // Step 2: Create state with correct type
  const [rows, setRows] = useState([
    {
      fullName: "John Bull",
      email: "JayJay@gmail.com",
      phone: "+234...",
      address: "No.90 Agape Road, Ikom Abuja",
    },
    {
      fullName: "Kazial Clington",
      email: "innasoft@gmail.com",
      phone: "+222...",
      address: "No.450 Congton Road, New Jearsey",
    },
  ]);

  // Step 3: Handle input changes correctly
  const handleChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedRows = [...rows];
    TableRow[index][field] = value;
    setRows(updatedRows);
  };
  return (
    <div className="flex flex-col mt-30 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16 bg-white">
      <div className="w-full space-y-6">
        <h2 className="text-4xl font-bold text-center">
          To Our Esteemed Customer!!!
        </h2>
      </div>
      <div className="mt-10 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Full Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone Number</th>
              <th className="border px-4 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="bg-white hover:bg-gray-50">
                <td className="border px-4 py-2 align-top">
                  <textarea
                    className="w-full resize-none bg-transparent outline-none overflow-y-auto break-words"
                    value={row.fullName}
                    onChange={(e) =>
                      handleChange(index, "fullName", e.target.value)
                    }
                    rows={1}
                  />
                </td>
                <td className="border px-4 py-2 align-top">
                  <textarea
                    className="w-full resize-none bg-transparent outline-none overflow-y-auto break-words"
                    value={row.email}
                    onChange={(e) =>
                      handleChange(index, "email", e.target.value)
                    }
                    rows={1}
                  />
                </td>
                <td className="border px-4 py-2 align-top">
                  <textarea
                    className="w-full resize-none bg-transparent outline-none overflow-y-auto break-words"
                    value={row.phone}
                    onChange={(e) =>
                      handleChange(index, "phone", e.target.value)
                    }
                    rows={1}
                  />
                </td>
                <td className="border px-4 py-2 align-top">
                  <textarea
                    className="w-full resize-none bg-transparent outline-none overflow-y-auto break-words"
                    value={row.address}
                    onChange={(e) =>
                      handleChange(index, "address", e.target.value)
                    }
                    rows={2}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Optional Add Row Button */}
        <button
          onClick={() =>
            setRows([
              ...rows,
              { fullName: "", email: "", phone: "", address: "" },
            ])
          }
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Row
        </button>
      </div>
    </div>
  );
}

export default customer;