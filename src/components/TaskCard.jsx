import React from "react";

export const TaskCard = ({ tasks, onDragStart, columnId }) => {
    return (
        <div className="p-2">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className="p-2 bg-white border rounded mb-2 cursor-grab"
                    draggable
                    onDragStart={() => onDragStart(task, columnId)}
                >
                    {task.name}
                </div>
            ))}
        </div>
    );
};
