import React from "react";
import { Summary } from "../Summary";
import { TransactiosTable } from "../transactiosTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactiosTable />
        </Container>
    )
}