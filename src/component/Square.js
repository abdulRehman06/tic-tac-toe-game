import React from 'react';
import Button from "react-bootstrap/Button";

export default function Square({ onClick , blockValue  }) {
    return (
        <div>
            <Button variant="outline-primary"
                    onClick={onClick}
            >
                {blockValue}
            </Button>
        </div>

    )
}
