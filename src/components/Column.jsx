import React, { useState } from "react";
import data from "../../column";
import { TaskCard } from "./TaskCard";

export const Column = () => {
    const [columns, setColumns] = useState(data.columns);

    function createColumn() {
        const newColumn = {
            id: `column-${columns.length + 1}`,
            title: `New Column ${columns.length + 1}`,
            tasks: [],
        };

        setColumns([...columns, newColumn]);
    }

    function addTask(columnId) {
        const updatedColumns = columns.map((col) => {
            if(col.id === columnId) {
                return {
                    ...col,
                    tasks: [...col.tasks, { id: `task-${col.tasks.length + 1}`, name: `Task ${col.tasks.length + 1}` }],
                };
            }
            return col;
        });

        setColumns(updatedColumns);
    }

    function dragTask() {
        
    }

    return (
        <div className="flex">
            <div className="flex gap-4 p-4">
                {columns.map((column) => (
                    <div key={column.id} className="p-4 bg-gray-100 border rounded w-64">
                        <div className="p-2 bg-gray-600 text-white font-bold rounded-t">
                            {column.title}
                        </div>
                        <TaskCard tasks={column.tasks} />
                        <button
                            className="p-2 bg-gray-200 text-center rounded-b cursor-pointer w-full"
                            onClick={() => addTask(column.id)}
                        >
                            Add Task
                        </button>
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
