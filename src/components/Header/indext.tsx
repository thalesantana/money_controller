import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface RenderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}:RenderProps) {
   
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="money controll" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}