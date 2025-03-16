import React, { useState } from "react";
import data from "../../column";

export const Column = () => {
    const [column, setColumn] = useState(data.column);

    function createColumn() {
        console.log("creating a new column");

        const newColumn = {
            id: `column-${column.length + 1}`,
            title: `New Column ${column.length + 1}`,
        };

        setColumn([...column, newColumn]);
    }

    return (
        <div className="flex">
            <div className="flex gap-4 p-4">
                {column.map((column) => (
                    <div key={column.id} className="p-4 bg-gray-100 border rounded w-64">
                        <div className="p-2 bg-gray-600 text-white font-bold rounded-t">
                            {column.title}
                        </div>
                        <div className="p-4 min-h-64">test</div>
                        <div className="p-2 bg-gray-200 text-center rounded-b cursor-pointer">
                            Add Task
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4">
                <button className="p-4 bg-gray-100 border rounded w-32 cursor-pointer" onClick={createColumn}>
                    Add Column
                </button>
            </div>
        </div>
    );
};
