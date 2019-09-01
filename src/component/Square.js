import React from 'react';
import Button from "react-bootstrap/Button";

export default function Square({ onClick , value  }) {
    return (
        <div>
            <Button variant="outline-primary"
                    onClick={onClick}
            >
                {value}
            </Button>
        </div>

    )
}
