import React, { useState } from "react";

interface ParentComponentProps {
    render: (data: string[]) => React.ReactNode;
}

const ParentComponent: React.FC<ParentComponentProps> = ({ render }) => {
    const [data] = useState<string[]>(["Apple 🍎", "Banana 🍌", "Orange 🍊"]);

    return (
        <div>
            {render(data)}
        </div>
    );
};

export default ParentComponent;
