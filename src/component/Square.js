import React from 'react';
import Button from "react-bootstrap/Button";

export default function Square({ onClick , blockValue  }) {
    return (
        <div>

            <Button variant="outline-primary"
                    className="square"
                    onClick={onClick}
            >
                {blockValue}
            </Button>
        </div>

    )
}
